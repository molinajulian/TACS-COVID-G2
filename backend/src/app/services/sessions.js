const { uuid } = require('uuidv4');
const { promisifyAll } = require('bluebird');
const { signAsync, verifyAsync } = promisifyAll(require('jsonwebtoken'));
const { inspect } = require('util');
const { hash, compare, genSalt } = require('bcryptjs');
const axios = require('axios');
const { invalidToken } = require('../errors/builders');

const { moment } = require('../utils/moment');
const {
  expirationUnitAccessToken,
  expirationUnitIdToken,
  expirationUnitRefreshToken,
  expirationValueAccessToken,
  expirationValueIdToken,
  expirationValueRefreshToken,
  secret,
  hashingSalts
} = require('../../config').session;
const { facebookUrl } = require('../../config').externalProviders;
const logger = require('../logger');
const { databaseError, internalServerError } = require('../errors/builders');
const {
  EXTERNAL_PROVIDERS: { FACEBOOK },
  DEFAULT_FIELDS_FACEBOOK
} = require('../utils/constants');

const getIss = req => `${req.protocol}://${req.get('host')}`;

exports.verifyAccessToken = token => verifyAsync(token, secret);

exports.generateAccessToken = (user, req) =>
  signAsync(
    {
      token_use: 'access',
      user_type: user.type,
      nbf: moment().unix(),
      exp: moment()
        .clone()
        .add(parseInt(expirationValueAccessToken), expirationUnitAccessToken)
        .unix()
    },
    secret,
    {
      issuer: getIss(req),
      jwtid: uuid(),
      subject: `${user.id}`
    }
  );

exports.generateTokens = ({ req, user }) => {
  logger.info(`Attempting to generate tokens for the user with id: ${user.id}`);
  const iss = getIss(req);
  logger.info('Iss was generated successfully');
  const accessPromise = this.generateAccessToken(user, req);
  const refreshPromise = signAsync(
    {
      token_use: 'refresh',
      nbf: moment().unix(),
      exp: moment()
        .clone()
        .add(expirationValueRefreshToken, expirationUnitRefreshToken)
        .unix()
    },
    secret,
    {
      issuer: iss,
      jwtid: uuid(),
      subject: `${user.id}`
    }
  );
  const idPromise = signAsync(
    {
      token_use: 'id',
      email: user.email,
      first_name: user.name,
      last_name: user.lastName,
      user_type: user.type,
      nbf: moment().unix(),
      exp: moment()
        .clone()
        .add(expirationValueIdToken, expirationUnitIdToken)
        .unix()
    },
    secret,
    {
      issuer: iss,
      jwtid: uuid(),
      subject: `${user.id}`
    }
  );
  return Promise.all([accessPromise, idPromise, refreshPromise]).catch(err => {
    /* istanbul ignore next */
    logger.error(inspect(err));
    /* istanbul ignore next */
    throw databaseError(`There was an error generating the tokens: ${err.message}`);
  });
};

exports.verifyAndCreateToken = ({ req }) => {
  logger.info(
    `Attempting to verify token ${req.body.refresh_token} generated for the user with id :${req.user.id}`
  );
  return verifyAsync(req.body.refresh_token, secret)
    .then(() => {
      logger.info('Token verified successful');
      logger.info('Attempting to generate new access token');
      return signAsync(
        {
          token_use: 'access',
          user_type: req.user.type,
          nbf: moment().unix(),
          exp: moment()
            .clone()
            .add(parseInt(expirationValueAccessToken), expirationUnitAccessToken)
            .unix()
        },
        secret,
        {
          issuer: getIss(req),
          jwtid: uuid(),
          subject: `${req.user.id}`
        }
      );
    })
    .catch(err => {
      /* istanbul ignore next */
      logger.error(inspect(err));
      /* istanbul ignore next */
      throw databaseError(`There was an error generating the token: ${err.message}`);
    });
};

exports.hashPassword = password =>
  genSalt(parseInt(hashingSalts))
    .then(salt => hash(password, salt))
    .catch(err => {
      /* istanbul ignore next */
      logger.error(inspect(err));
      /* istanbul ignore next */
      throw internalServerError(err.message);
    });

exports.comparePassword = (password, hashedPassword) =>
  compare(password, hashedPassword).catch(err => {
    /* istanbul ignore next */
    logger.error(inspect(err));
    /* istanbul ignore next */
    throw internalServerError(err.message);
  });

const getUrlByProviderName = providerName => ({ [FACEBOOK]: facebookUrl }[providerName]);

const buildQueryParamsByProviderName = providerName =>
  ({ [FACEBOOK]: accessToken => ({ fields: DEFAULT_FIELDS_FACEBOOK.join(','), access_token: accessToken }) }[
    providerName
  ]);

exports.checkExternalToken = ({ accessToken, providerName }) =>
  axios
    .get(getUrlByProviderName(providerName), {
      params: buildQueryParamsByProviderName(providerName)(accessToken)
    })
    .then(({ data: userData }) => ({
      email: userData.email,
      name: userData.first_name,
      lastName: userData.last_name
    }))
    .catch(error => {
      logger.error(error);
      throw invalidToken('The provided access_token is invalid');
    });
