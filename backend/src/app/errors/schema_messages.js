const integerMessage = field => `${field} must be an integer`;
const stringMessage = field => `${field} must be a string`;
const tokenMessage = field => `${field} must be a jwt token`;
const dateMessage = field => `${field} must be a date`;
const arrayMessage = field => `${field} must be an array`;
const containedMessage = location => `and contained in ${location}`;

exports.authorization = 'Authorization must be a jwt token and must contained in headers';
exports.orderType = `order_type must be asc o desc ${containedMessage('query')}`;
exports.orderColumn = `order_column must be a valid column ${containedMessage('query')}`;
exports.page = `${integerMessage('page')}, be greater than zero ${containedMessage('query')}`;
exports.limit = `${integerMessage('limit')}, be greater than zero ${containedMessage('query')}`;
exports.userId = `${integerMessage('user id')} ${containedMessage('path')}`;
exports.userName = `${stringMessage('name')} ${containedMessage('body')}`;
exports.password = `${stringMessage('password')}, be a hash ${containedMessage('body')}`;
exports.email = `${stringMessage('email')} ${containedMessage('body')}`;
exports.refreshToken = `${tokenMessage('refresh_token')} ${containedMessage('body')}`;
exports.ListName = `${stringMessage('name')} ${containedMessage('query')}`;
exports.lastAccess = `${dateMessage('last_access')} ${containedMessage('query')}`;
exports.isocode2 = `${stringMessage('isocode2')} ${containedMessage('query')}`;
exports.isocode3 = `${stringMessage('isocode3')} ${containedMessage('query')}`;
exports.countryName = `${stringMessage('name')} ${containedMessage('query')}`;
exports.countries = `${arrayMessage('countries')} of integers`;
exports.listId = `${integerMessage('list id')} ${containedMessage('path')}`;
exports.offset = `${integerMessage('offset')} ${containedMessage('query')}`;
exports.countryName = `${stringMessage('country_name')} ${containedMessage('query')}`;
exports.countryId = `${integerMessage('country_id')} ${containedMessage('body')}`;
