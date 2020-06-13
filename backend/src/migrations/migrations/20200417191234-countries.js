/* eslint-disable */
'use strict';

const { moment } = require('../../app/utils/moment');

const countries= [{name:'Afghanistan',iso2:'AF',iso3:'AFG',latitude:'33',longitude:'65',created_at:moment().format(),updated_at:moment().format()},
{name:'Albania',iso2:'AL',iso3:'ALB',latitude:'41',longitude:'20',created_at:moment().format(),updated_at:moment().format()},
{name:'Algeria',iso2:'DZ',iso3:'DZA',latitude:'28',longitude:'3',created_at:moment().format(),updated_at:moment().format()},
{name:'AmericanSamoa',iso2:'AS',iso3:'ASM',latitude:'-143333',longitude:'-170',created_at:moment().format(),updated_at:moment().format()},
{name:'Andorra',iso2:'AD',iso3:'AND',latitude:'42.5',longitude:'1.6',created_at:moment().format(),updated_at:moment().format()},
{name:'Angola',iso2:'AO',iso3:'AGO',latitude:'-12.5',longitude:'18.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Anguilla',iso2:'AI',iso3:'AIA',latitude:'18.25',longitude:'-631667',created_at:moment().format(),updated_at:moment().format()},
{name:'Antarctica',iso2:'AQ',iso3:'ATA',latitude:'-90',longitude:'0',created_at:moment().format(),updated_at:moment().format()},
{name:'AntiguaandBarbuda',iso2:'AG',iso3:'ATG',latitude:'17.05',longitude:'-61.8',created_at:moment().format(),updated_at:moment().format()},
{name:'Argentina',iso2:'AR',iso3:'ARG',latitude:'-34',longitude:'-64',created_at:moment().format(),updated_at:moment().format()},
{name:'Armenia',iso2:'AM',iso3:'ARM',latitude:'40',longitude:'45',created_at:moment().format(),updated_at:moment().format()},
{name:'Aruba',iso2:'AW',iso3:'ABW',latitude:'12.5',longitude:'-699667',created_at:moment().format(),updated_at:moment().format()},
{name:'Australia',iso2:'AU',iso3:'AUS',latitude:'-27',longitude:'133',created_at:moment().format(),updated_at:moment().format()},
{name:'Austria',iso2:'AT',iso3:'AUT',latitude:'473333',longitude:'133333',created_at:moment().format(),updated_at:moment().format()},
{name:'Azerbaijan',iso2:'AZ',iso3:'AZE',latitude:'40.5',longitude:'47.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Bahamas',iso2:'BS',iso3:'BHS',latitude:'24.25',longitude:'-76',created_at:moment().format(),updated_at:moment().format()},
{name:'Bahrain',iso2:'BH',iso3:'BHR',latitude:'26',longitude:'50.55',created_at:moment().format(),updated_at:moment().format()},
{name:'Bangladesh',iso2:'BD',iso3:'BGD',latitude:'24',longitude:'90',created_at:moment().format(),updated_at:moment().format()},
{name:'Barbados',iso2:'BB',iso3:'BRB',latitude:'131667',longitude:'-595333',created_at:moment().format(),updated_at:moment().format()},
{name:'Belarus',iso2:'BY',iso3:'BLR',latitude:'53',longitude:'28',created_at:moment().format(),updated_at:moment().format()},
{name:'Belgium',iso2:'BE',iso3:'BEL',latitude:'508333',longitude:'4',created_at:moment().format(),updated_at:moment().format()},
{name:'Belize',iso2:'BZ',iso3:'BLZ',latitude:'17.25',longitude:'-88.75',created_at:moment().format(),updated_at:moment().format()},
{name:'Benin',iso2:'BJ',iso3:'BEN',latitude:'9.5',longitude:'2.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Bermuda',iso2:'BM',iso3:'BMU',latitude:'323333',longitude:'-64.75',created_at:moment().format(),updated_at:moment().format()},
{name:'Bhutan',iso2:'BT',iso3:'BTN',latitude:'27.5',longitude:'90.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Bolivia',iso2:'BO',iso3:'BOL',latitude:'-17',longitude:'-65',created_at:moment().format(),updated_at:moment().format()},
{name:'BosniaandHerzegovina',iso2:'BA',iso3:'BIH',latitude:'44',longitude:'18',created_at:moment().format(),updated_at:moment().format()},
{name:'Botswana',iso2:'BW',iso3:'BWA',latitude:'-22',longitude:'24',created_at:moment().format(),updated_at:moment().format()},
{name:'BouvetIsland',iso2:'BV',iso3:'BVT',latitude:'-544333',longitude:'3.4',created_at:moment().format(),updated_at:moment().format()},
{name:'Brazil',iso2:'BR',iso3:'BRA',latitude:'-10',longitude:'-55',created_at:moment().format(),updated_at:moment().format()},
{name:'BritishIndianOceanTerritory',iso2:'IO',iso3:'IOT',latitude:'-6',longitude:'71.5',created_at:moment().format(),updated_at:moment().format()},
{name:'BruneiDarussalam',iso2:'BN',iso3:'BRN',latitude:'4.5',longitude:'1146667',created_at:moment().format(),updated_at:moment().format()},
{name:'Brunei',iso2:'BN',iso3:'BRN',latitude:'4.5',longitude:'1146667',created_at:moment().format(),updated_at:moment().format()},
{name:'Bulgaria',iso2:'BG',iso3:'BGR',latitude:'43',longitude:'25',created_at:moment().format(),updated_at:moment().format()},
{name:'BurkinaFaso',iso2:'BF',iso3:'BFA',latitude:'13',longitude:'-2',created_at:moment().format(),updated_at:moment().format()},
{name:'Burundi',iso2:'BI',iso3:'BDI',latitude:'-3.5',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
{name:'Cambodia',iso2:'KH',iso3:'KHM',latitude:'13',longitude:'105',created_at:moment().format(),updated_at:moment().format()},
{name:'Cameroon',iso2:'CM',iso3:'CMR',latitude:'6',longitude:'12',created_at:moment().format(),updated_at:moment().format()},
{name:'Canada',iso2:'CA',iso3:'CAN',latitude:'60',longitude:'-95',created_at:moment().format(),updated_at:moment().format()},
{name:'CapeVerde',iso2:'CV',iso3:'CPV',latitude:'16',longitude:'-24',created_at:moment().format(),updated_at:moment().format()},
{name:'CaymanIslands',iso2:'KY',iso3:'CYM',latitude:'19.5',longitude:'-80.5',created_at:moment().format(),updated_at:moment().format()},
{name:'CentralAfricanRepublic',iso2:'CF',iso3:'CAF',latitude:'7',longitude:'21',created_at:moment().format(),updated_at:moment().format()},
{name:'Chad',iso2:'TD',iso3:'TCD',latitude:'15',longitude:'19',created_at:moment().format(),updated_at:moment().format()},
{name:'Chile',iso2:'CL',iso3:'CHL',latitude:'-30',longitude:'-71',created_at:moment().format(),updated_at:moment().format()},
{name:'China',iso2:'CN',iso3:'CHN',latitude:'35',longitude:'105',created_at:moment().format(),updated_at:moment().format()},
{name:'ChristmasIsland',iso2:'CX',iso3:'CXR',latitude:'-10.5',longitude:'1056667',created_at:moment().format(),updated_at:moment().format()},
{name:'Cocos(Keeling)Islands',iso2:'CC',iso3:'CCK',latitude:'-12.5',longitude:'968333',created_at:moment().format(),updated_at:moment().format()},
{name:'Colombia',iso2:'CO',iso3:'COL',latitude:'4',longitude:'-72',created_at:moment().format(),updated_at:moment().format()},
{name:'Comoros',iso2:'KM',iso3:'COM',latitude:'-121667',longitude:'44.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Congo',iso2:'CG',iso3:'COG',latitude:'-1',longitude:'15',created_at:moment().format(),updated_at:moment().format()},
{name:'Congo(Democratic)',iso2:'CD',iso3:'COD',latitude:'0',longitude:'25',created_at:moment().format(),updated_at:moment().format()},
{name:'CookIslands',iso2:'CK',iso3:'COK',latitude:'-212333',longitude:'-1597667',created_at:moment().format(),updated_at:moment().format()},
{name:'CostaRica',iso2:'CR',iso3:'CRI',latitude:'10',longitude:'-84',created_at:moment().format(),updated_at:moment().format()},
{name:'CÃ´tedIvoire',iso2:'CI',iso3:'CIV',latitude:'8',longitude:'-5',created_at:moment().format(),updated_at:moment().format()},
{name:'IvoryCoast',iso2:'CI',iso3:'CIV',latitude:'8',longitude:'-5',created_at:moment().format(),updated_at:moment().format()},
{name:'Croatia',iso2:'HR',iso3:'HRV',latitude:'451667',longitude:'15.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Cuba',iso2:'CU',iso3:'CUB',latitude:'21.5',longitude:'-80',created_at:moment().format(),updated_at:moment().format()},
{name:'Cyprus',iso2:'CY',iso3:'CYP',latitude:'35',longitude:'33',created_at:moment().format(),updated_at:moment().format()},
{name:'CzechRepublic',iso2:'CZ',iso3:'CZE',latitude:'49.75',longitude:'15.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Denmark',iso2:'DK',iso3:'DNK',latitude:'56',longitude:'10',created_at:moment().format(),updated_at:moment().format()},
{name:'Djibouti',iso2:'DJ',iso3:'DJI',latitude:'11.5',longitude:'43',created_at:moment().format(),updated_at:moment().format()},
{name:'Dominica',iso2:'DM',iso3:'DMA',latitude:'154167',longitude:'-613333',created_at:moment().format(),updated_at:moment().format()},
{name:'DominicanRepublic',iso2:'DO',iso3:'DOM',latitude:'19',longitude:'-706667',created_at:moment().format(),updated_at:moment().format()},
{name:'Ecuador',iso2:'EC',iso3:'ECU',latitude:'-2',longitude:'-77.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Egypt',iso2:'EG',iso3:'EGY',latitude:'27',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
{name:'ElSalvador',iso2:'SV',iso3:'SLV',latitude:'138333',longitude:'-889167',created_at:moment().format(),updated_at:moment().format()},
{name:'EquatorialGuinea',iso2:'GQ',iso3:'GNQ',latitude:'2',longitude:'10',created_at:moment().format(),updated_at:moment().format()},
{name:'Eritrea',iso2:'ER',iso3:'ERI',latitude:'15',longitude:'39',created_at:moment().format(),updated_at:moment().format()},
{name:'Estonia',iso2:'EE',iso3:'EST',latitude:'59',longitude:'26',created_at:moment().format(),updated_at:moment().format()},
{name:'Ethiopia',iso2:'ET',iso3:'ETH',latitude:'8',longitude:'38',created_at:moment().format(),updated_at:moment().format()},
{name:'FalklandIslands(Malvinas)',iso2:'FK',iso3:'FLK',latitude:'-51.75',longitude:'-59',created_at:moment().format(),updated_at:moment().format()},
{name:'FaroeIslands',iso2:'FO',iso3:'FRO',latitude:'62',longitude:'-7',created_at:moment().format(),updated_at:moment().format()},
{name:'Fiji',iso2:'FJ',iso3:'FJI',latitude:'-18',longitude:'175',created_at:moment().format(),updated_at:moment().format()},
{name:'Finland',iso2:'FI',iso3:'FIN',latitude:'64',longitude:'26',created_at:moment().format(),updated_at:moment().format()},
{name:'France',iso2:'FR',iso3:'FRA',latitude:'46',longitude:'2',created_at:moment().format(),updated_at:moment().format()},
{name:'FrenchGuiana',iso2:'GF',iso3:'GUF',latitude:'4',longitude:'-53',created_at:moment().format(),updated_at:moment().format()},
{name:'FrenchPolynesia',iso2:'PF',iso3:'PYF',latitude:'-15',longitude:'-140',created_at:moment().format(),updated_at:moment().format()},
{name:'FrenchSouthernTerritories',iso2:'TF',iso3:'ATF',latitude:'-43',longitude:'67',created_at:moment().format(),updated_at:moment().format()},
{name:'Gabon',iso2:'GA',iso3:'GAB',latitude:'-1',longitude:'11.75',created_at:moment().format(),updated_at:moment().format()},
{name:'Gambia',iso2:'GM',iso3:'GMB',latitude:'134667',longitude:'-165667',created_at:moment().format(),updated_at:moment().format()},
{name:'Georgia',iso2:'GE',iso3:'GEO',latitude:'42',longitude:'43.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Germany',iso2:'DE',iso3:'DEU',latitude:'51',longitude:'9',created_at:moment().format(),updated_at:moment().format()},
{name:'Ghana',iso2:'GH',iso3:'GHA',latitude:'8',longitude:'-2',created_at:moment().format(),updated_at:moment().format()},
{name:'Gibraltar',iso2:'GI',iso3:'GIB',latitude:'361833',longitude:'-53667',created_at:moment().format(),updated_at:moment().format()},
{name:'Greece',iso2:'GR',iso3:'GRC',latitude:'39',longitude:'22',created_at:moment().format(),updated_at:moment().format()},
{name:'Greenland',iso2:'GL',iso3:'GRL',latitude:'72',longitude:'-40',created_at:moment().format(),updated_at:moment().format()},
{name:'Grenada',iso2:'GD',iso3:'GRD',latitude:'121167',longitude:'-616667',created_at:moment().format(),updated_at:moment().format()},
{name:'Guadeloupe',iso2:'GP',iso3:'GLP',latitude:'16.25',longitude:'-615833',created_at:moment().format(),updated_at:moment().format()},
{name:'Guam',iso2:'GU',iso3:'GUM',latitude:'134667',longitude:'1447833',created_at:moment().format(),updated_at:moment().format()},
{name:'Guatemala',iso2:'GT',iso3:'GTM',latitude:'15.5',longitude:'-90.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Guernsey',iso2:'GG',iso3:'GGY',latitude:'49.5',longitude:'-2.56',created_at:moment().format(),updated_at:moment().format()},
{name:'Guinea',iso2:'GN',iso3:'GIN',latitude:'11',longitude:'-10',created_at:moment().format(),updated_at:moment().format()},
{name:'Guinea-Bissau',iso2:'GW',iso3:'GNB',latitude:'12',longitude:'-15',created_at:moment().format(),updated_at:moment().format()},
{name:'Guyana',iso2:'GY',iso3:'GUY',latitude:'5',longitude:'-59',created_at:moment().format(),updated_at:moment().format()},
{name:'Haiti',iso2:'HT',iso3:'HTI',latitude:'19',longitude:'-724167',created_at:moment().format(),updated_at:moment().format()},
{name:'HeardIslandandMcDonaldIslands',iso2:'HM',iso3:'HMD',latitude:'-53.1',longitude:'725167',created_at:moment().format(),updated_at:moment().format()},
{name:'HolySee(VaticanCityState)',iso2:'VA',iso3:'VAT',latitude:'41.9',longitude:'12.45',created_at:moment().format(),updated_at:moment().format()},
{name:'Honduras',iso2:'HN',iso3:'HND',latitude:'15',longitude:'-86.5',created_at:moment().format(),updated_at:moment().format()},
{name:'HongKong',iso2:'HK',iso3:'HKG',latitude:'22.25',longitude:'1141667',created_at:moment().format(),updated_at:moment().format()},
{name:'Hungary',iso2:'HU',iso3:'HUN',latitude:'47',longitude:'20',created_at:moment().format(),updated_at:moment().format()},
{name:'Iceland',iso2:'IS',iso3:'ISL',latitude:'65',longitude:'-18',created_at:moment().format(),updated_at:moment().format()},
{name:'India',iso2:'IN',iso3:'IND',latitude:'20',longitude:'77',created_at:moment().format(),updated_at:moment().format()},
{name:'Indonesia',iso2:'ID',iso3:'IDN',latitude:'-5',longitude:'120',created_at:moment().format(),updated_at:moment().format()},
{name:'Iran',iso2:'IR',iso3:'IRN',latitude:'32',longitude:'53',created_at:moment().format(),updated_at:moment().format()},
{name:'Iraq',iso2:'IQ',iso3:'IRQ',latitude:'33',longitude:'44',created_at:moment().format(),updated_at:moment().format()},
{name:'Ireland',iso2:'IE',iso3:'IRL',latitude:'53',longitude:'-8',created_at:moment().format(),updated_at:moment().format()},
{name:'IsleofMan',iso2:'IM',iso3:'IMN',latitude:'54.23',longitude:'-4.55',created_at:moment().format(),updated_at:moment().format()},
{name:'Israel',iso2:'IL',iso3:'ISR',latitude:'31.5',longitude:'34.75',created_at:moment().format(),updated_at:moment().format()},
{name:'Italy',iso2:'IT',iso3:'ITA',latitude:'428333',longitude:'128333',created_at:moment().format(),updated_at:moment().format()},
{name:'Jamaica',iso2:'JM',iso3:'JAM',latitude:'18.25',longitude:'-77.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Japan',iso2:'JP',iso3:'JPN',latitude:'36',longitude:'138',created_at:moment().format(),updated_at:moment().format()},
{name:'Jersey',iso2:'JE',iso3:'JEY',latitude:'49.21',longitude:'-2.13',created_at:moment().format(),updated_at:moment().format()},
{name:'Jordan',iso2:'JO',iso3:'JOR',latitude:'31',longitude:'36',created_at:moment().format(),updated_at:moment().format()},
{name:'Kazakhstan',iso2:'KZ',iso3:'KAZ',latitude:'48',longitude:'68',created_at:moment().format(),updated_at:moment().format()},
{name:'Kenya',iso2:'KE',iso3:'KEN',latitude:'1',longitude:'38',created_at:moment().format(),updated_at:moment().format()},
{name:'Kiribati',iso2:'KI',iso3:'KIR',latitude:'14167',longitude:'173',created_at:moment().format(),updated_at:moment().format()},
{name:'Korea(Democratic)',iso2:'KP',iso3:'PRK',latitude:'40',longitude:'127',created_at:moment().format(),updated_at:moment().format()},
{name:'Korea',iso2:'KR',iso3:'KOR',latitude:'37',longitude:'127.5',created_at:moment().format(),updated_at:moment().format()},
{name:'SouthKorea',iso2:'KR',iso3:'KOR',latitude:'37',longitude:'127.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Kuwait',iso2:'KW',iso3:'KWT',latitude:'293375',longitude:'476581',created_at:moment().format(),updated_at:moment().format()},
{name:'Kyrgyzstan',iso2:'KG',iso3:'KGZ',latitude:'41',longitude:'75',created_at:moment().format(),updated_at:moment().format()},
{name:'LaoPeoplesDemocraticRepublic',iso2:'LA',iso3:'LAO',latitude:'18',longitude:'105',created_at:moment().format(),updated_at:moment().format()},
{name:'Latvia',iso2:'LV',iso3:'LVA',latitude:'57',longitude:'25',created_at:moment().format(),updated_at:moment().format()},
{name:'Lebanon',iso2:'LB',iso3:'LBN',latitude:'338333',longitude:'358333',created_at:moment().format(),updated_at:moment().format()},
{name:'Lesotho',iso2:'LS',iso3:'LSO',latitude:'-29.5',longitude:'28.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Liberia',iso2:'LR',iso3:'LBR',latitude:'6.5',longitude:'-9.5',created_at:moment().format(),updated_at:moment().format()},
{name:'LibyanArabJamahiriya',iso2:'LY',iso3:'LBY',latitude:'25',longitude:'17',created_at:moment().format(),updated_at:moment().format()},
{name:'Libya',iso2:'LY',iso3:'LBY',latitude:'25',longitude:'17',created_at:moment().format(),updated_at:moment().format()},
{name:'Liechtenstein',iso2:'LI',iso3:'LIE',latitude:'471667',longitude:'95333',created_at:moment().format(),updated_at:moment().format()},
{name:'Lithuania',iso2:'LT',iso3:'LTU',latitude:'56',longitude:'24',created_at:moment().format(),updated_at:moment().format()},
{name:'Luxembourg',iso2:'LU',iso3:'LUX',latitude:'49.75',longitude:'61667',created_at:moment().format(),updated_at:moment().format()},
{name:'Macao',iso2:'MO',iso3:'MAC',latitude:'221667',longitude:'113.55',created_at:moment().format(),updated_at:moment().format()},
{name:'Macedonia',iso2:'MK',iso3:'MKD',latitude:'418333',longitude:'22',created_at:moment().format(),updated_at:moment().format()},
{name:'Madagascar',iso2:'MG',iso3:'MDG',latitude:'-20',longitude:'47',created_at:moment().format(),updated_at:moment().format()},
{name:'Malawi',iso2:'MW',iso3:'MWI',latitude:'-13.5',longitude:'34',created_at:moment().format(),updated_at:moment().format()},
{name:'Malaysia',iso2:'MY',iso3:'MYS',latitude:'2.5',longitude:'112.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Maldives',iso2:'MV',iso3:'MDV',latitude:'3.25',longitude:'73',created_at:moment().format(),updated_at:moment().format()},
{name:'Mali',iso2:'ML',iso3:'MLI',latitude:'17',longitude:'-4',created_at:moment().format(),updated_at:moment().format()},
{name:'Malta',iso2:'MT',iso3:'MLT',latitude:'358333',longitude:'145833',created_at:moment().format(),updated_at:moment().format()},
{name:'MarshallIslands',iso2:'MH',iso3:'MHL',latitude:'9',longitude:'168',created_at:moment().format(),updated_at:moment().format()},
{name:'Martinique',iso2:'MQ',iso3:'MTQ',latitude:'146667',longitude:'-61',created_at:moment().format(),updated_at:moment().format()},
{name:'Mauritania',iso2:'MR',iso3:'MRT',latitude:'20',longitude:'-12',created_at:moment().format(),updated_at:moment().format()},
{name:'Mauritius',iso2:'MU',iso3:'MUS',latitude:'-202833',longitude:'57.55',created_at:moment().format(),updated_at:moment().format()},
{name:'Mayotte',iso2:'YT',iso3:'MYT',latitude:'-128333',longitude:'451667',created_at:moment().format(),updated_at:moment().format()},
{name:'Mexico',iso2:'MX',iso3:'MEX',latitude:'23',longitude:'-102',created_at:moment().format(),updated_at:moment().format()},
{name:'Micronesia',iso2:'FM',iso3:'FSM',latitude:'69167',longitude:'158.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Moldova',iso2:'MD',iso3:'MDA',latitude:'47',longitude:'29',created_at:moment().format(),updated_at:moment().format()},
{name:'Monaco',iso2:'MC',iso3:'MCO',latitude:'437333',longitude:'7.4',created_at:moment().format(),updated_at:moment().format()},
{name:'Mongolia',iso2:'MN',iso3:'MNG',latitude:'46',longitude:'105',created_at:moment().format(),updated_at:moment().format()},
{name:'Montenegro',iso2:'ME',iso3:'MNE',latitude:'42',longitude:'19',created_at:moment().format(),updated_at:moment().format()},
{name:'Montserrat',iso2:'MS',iso3:'MSR',latitude:'16.75',longitude:'-62.2',created_at:moment().format(),updated_at:moment().format()},
{name:'Morocco',iso2:'MA',iso3:'MAR',latitude:'32',longitude:'-5',created_at:moment().format(),updated_at:moment().format()},
{name:'Mozambique',iso2:'MZ',iso3:'MOZ',latitude:'-18.25',longitude:'35',created_at:moment().format(),updated_at:moment().format()},
{name:'Myanmar',iso2:'MM',iso3:'MMR',latitude:'22',longitude:'98',created_at:moment().format(),updated_at:moment().format()},
{name:'Burma',iso2:'MM',iso3:'MMR',latitude:'22',longitude:'98',created_at:moment().format(),updated_at:moment().format()},
{name:'Namibia',iso2:'NA',iso3:'NAM',latitude:'-22',longitude:'17',created_at:moment().format(),updated_at:moment().format()},
{name:'Nauru',iso2:'NR',iso3:'NRU',latitude:'-0.5333',longitude:'1669167',created_at:moment().format(),updated_at:moment().format()},
{name:'Nepal',iso2:'NP',iso3:'NPL',latitude:'28',longitude:'84',created_at:moment().format(),updated_at:moment().format()},
{name:'Netherlands',iso2:'NL',iso3:'NLD',latitude:'52.5',longitude:'5.75',created_at:moment().format(),updated_at:moment().format()},
{name:'NetherlandsAntilles',iso2:'AN',iso3:'ANT',latitude:'12.25',longitude:'-68.75',created_at:moment().format(),updated_at:moment().format()},
{name:'NewCaledonia',iso2:'NC',iso3:'NCL',latitude:'-21.5',longitude:'165.5',created_at:moment().format(),updated_at:moment().format()},
{name:'NewZealand',iso2:'NZ',iso3:'NZL',latitude:'-41',longitude:'174',created_at:moment().format(),updated_at:moment().format()},
{name:'Nicaragua',iso2:'NI',iso3:'NIC',latitude:'13',longitude:'-85',created_at:moment().format(),updated_at:moment().format()},
{name:'Niger',iso2:'NE',iso3:'NER',latitude:'16',longitude:'8',created_at:moment().format(),updated_at:moment().format()},
{name:'Nigeria',iso2:'NG',iso3:'NGA',latitude:'10',longitude:'8',created_at:moment().format(),updated_at:moment().format()},
{name:'Niue',iso2:'NU',iso3:'NIU',latitude:'-190333',longitude:'-1698667',created_at:moment().format(),updated_at:moment().format()},
{name:'NorfolkIsland',iso2:'NF',iso3:'NFK',latitude:'-290333',longitude:'167.95',created_at:moment().format(),updated_at:moment().format()},
{name:'NorthernMarianaIslands',iso2:'MP',iso3:'MNP',latitude:'15.2',longitude:'145.75',created_at:moment().format(),updated_at:moment().format()},
{name:'Norway',iso2:'NO',iso3:'NOR',latitude:'62',longitude:'10',created_at:moment().format(),updated_at:moment().format()},
{name:'Oman',iso2:'OM',iso3:'OMN',latitude:'21',longitude:'57',created_at:moment().format(),updated_at:moment().format()},
{name:'Pakistan',iso2:'PK',iso3:'PAK',latitude:'30',longitude:'70',created_at:moment().format(),updated_at:moment().format()},
{name:'Palau',iso2:'PW',iso3:'PLW',latitude:'7.5',longitude:'134.5',created_at:moment().format(),updated_at:moment().format()},
{name:'PalestinianTerritory',iso2:'PS',iso3:'PSE',latitude:'32',longitude:'35.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Panama',iso2:'PA',iso3:'PAN',latitude:'9',longitude:'-80',created_at:moment().format(),updated_at:moment().format()},
{name:'PapuaNewGuinea',iso2:'PG',iso3:'PNG',latitude:'-6',longitude:'147',created_at:moment().format(),updated_at:moment().format()},
{name:'Paraguay',iso2:'PY',iso3:'PRY',latitude:'-23',longitude:'-58',created_at:moment().format(),updated_at:moment().format()},
{name:'Peru',iso2:'PE',iso3:'PER',latitude:'-10',longitude:'-76',created_at:moment().format(),updated_at:moment().format()},
{name:'Philippines',iso2:'PH',iso3:'PHL',latitude:'13',longitude:'122',created_at:moment().format(),updated_at:moment().format()},
{name:'Pitcairn',iso2:'PN',iso3:'PCN',latitude:'-24.7',longitude:'-127.4',created_at:moment().format(),updated_at:moment().format()},
{name:'Poland',iso2:'PL',iso3:'POL',latitude:'52',longitude:'20',created_at:moment().format(),updated_at:moment().format()},
{name:'Portugal',iso2:'PT',iso3:'PRT',latitude:'39.5',longitude:'-8',created_at:moment().format(),updated_at:moment().format()},
{name:'PuertoRico',iso2:'PR',iso3:'PRI',latitude:'18.25',longitude:'-66.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Qatar',iso2:'QA',iso3:'QAT',latitude:'25.5',longitude:'51.25',created_at:moment().format(),updated_at:moment().format()},
{name:'Reunion',iso2:'RE',iso3:'REU',latitude:'-21.1',longitude:'55.6',created_at:moment().format(),updated_at:moment().format()},
{name:'Romania',iso2:'RO',iso3:'ROU',latitude:'46',longitude:'25',created_at:moment().format(),updated_at:moment().format()},
{name:'RussianFederation',iso2:'RU',iso3:'RUS',latitude:'60',longitude:'100',created_at:moment().format(),updated_at:moment().format()},
{name:'Russia',iso2:'RU',iso3:'RUS',latitude:'60',longitude:'100',created_at:moment().format(),updated_at:moment().format()},
{name:'Rwanda',iso2:'RW',iso3:'RWA',latitude:'-2',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintHelena',iso2:'SH',iso3:'SHN',latitude:'-159333',longitude:'-5.7',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintKittsandNevis',iso2:'KN',iso3:'KNA',latitude:'173333',longitude:'-62.75',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintLucia',iso2:'LC',iso3:'LCA',latitude:'138833',longitude:'-611333',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintPierreandMiquelon',iso2:'PM',iso3:'SPM',latitude:'468333',longitude:'-563333',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintVincentandtheGrenadines',iso2:'VC',iso3:'VCT',latitude:'13.25',longitude:'-61.2',created_at:moment().format(),updated_at:moment().format()},
{name:'SaintVincent&theGrenadines',iso2:'VC',iso3:'VCT',latitude:'13.25',longitude:'-61.2',created_at:moment().format(),updated_at:moment().format()},
{name:'St.VincentandtheGrenadines',iso2:'VC',iso3:'VCT',latitude:'13.25',longitude:'-61.2',created_at:moment().format(),updated_at:moment().format()},
{name:'Samoa',iso2:'WS',iso3:'WSM',latitude:'-135833',longitude:'-1723333',created_at:moment().format(),updated_at:moment().format()},
{name:'SanMarino',iso2:'SM',iso3:'SMR',latitude:'437667',longitude:'124167',created_at:moment().format(),updated_at:moment().format()},
{name:'SaoTomeandPrincipe',iso2:'ST',iso3:'STP',latitude:'1',longitude:'7',created_at:moment().format(),updated_at:moment().format()},
{name:'SaudiArabia',iso2:'SA',iso3:'SAU',latitude:'25',longitude:'45',created_at:moment().format(),updated_at:moment().format()},
{name:'Senegal',iso2:'SN',iso3:'SEN',latitude:'14',longitude:'-14',created_at:moment().format(),updated_at:moment().format()},
{name:'Serbia',iso2:'RS',iso3:'SRB',latitude:'44',longitude:'21',created_at:moment().format(),updated_at:moment().format()},
{name:'Seychelles',iso2:'SC',iso3:'SYC',latitude:'-45833',longitude:'556667',created_at:moment().format(),updated_at:moment().format()},
{name:'SierraLeone',iso2:'SL',iso3:'SLE',latitude:'8.5',longitude:'-11.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Singapore',iso2:'SG',iso3:'SGP',latitude:'13667',longitude:'103.8',created_at:moment().format(),updated_at:moment().format()},
{name:'Slovakia',iso2:'SK',iso3:'SVK',latitude:'486667',longitude:'19.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Slovenia',iso2:'SI',iso3:'SVN',latitude:'46',longitude:'15',created_at:moment().format(),updated_at:moment().format()},
{name:'SolomonIslands',iso2:'SB',iso3:'SLB',latitude:'-8',longitude:'159',created_at:moment().format(),updated_at:moment().format()},
{name:'Somalia',iso2:'SO',iso3:'SOM',latitude:'10',longitude:'49',created_at:moment().format(),updated_at:moment().format()},
{name:'SouthAfrica',iso2:'ZA',iso3:'ZAF',latitude:'-29',longitude:'24',created_at:moment().format(),updated_at:moment().format()},
{name:'SouthGeorgiaandtheSouthSandwichIslands',iso2:'GS',iso3:'SGS',latitude:'-54.5',longitude:'-37',created_at:moment().format(),updated_at:moment().format()},
{name:'Spain',iso2:'ES',iso3:'ESP',latitude:'40',longitude:'-4',created_at:moment().format(),updated_at:moment().format()},
{name:'SriLanka',iso2:'LK',iso3:'LKA',latitude:'7',longitude:'81',created_at:moment().format(),updated_at:moment().format()},
{name:'Sudan',iso2:'SD',iso3:'SDN',latitude:'15',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
{name:'Suriname',iso2:'SR',iso3:'SUR',latitude:'4',longitude:'-56',created_at:moment().format(),updated_at:moment().format()},
{name:'SvalbardandJanMayen',iso2:'SJ',iso3:'SJM',latitude:'78',longitude:'20',created_at:moment().format(),updated_at:moment().format()},
{name:'Swaziland',iso2:'SZ',iso3:'SWZ',latitude:'-26.5',longitude:'31.5',created_at:moment().format(),updated_at:moment().format()},
{name:'Sweden',iso2:'SE',iso3:'SWE',latitude:'62',longitude:'15',created_at:moment().format(),updated_at:moment().format()},
{name:'Switzerland',iso2:'CH',iso3:'CHE',latitude:'47',longitude:'8',created_at:moment().format(),updated_at:moment().format()},
{name:'SyrianArabRepublic',iso2:'SY',iso3:'SYR',latitude:'35',longitude:'38',created_at:moment().format(),updated_at:moment().format()},
{name:'Taiwan',iso2:'TW',iso3:'TWN',latitude:'23.5',longitude:'121',created_at:moment().format(),updated_at:moment().format()},
{name:'Tajikistan',iso2:'TJ',iso3:'TJK',latitude:'39',longitude:'71',created_at:moment().format(),updated_at:moment().format()},
{name:'Tanzania',iso2:'TZ',iso3:'TZA',latitude:'-6',longitude:'35',created_at:moment().format(),updated_at:moment().format()},
{name:'Thailand',iso2:'TH',iso3:'THA',latitude:'15',longitude:'100',created_at:moment().format(),updated_at:moment().format()},
{name:'Timor-Leste',iso2:'TL',iso3:'TLS',latitude:'-8.55',longitude:'1255167',created_at:moment().format(),updated_at:moment().format()},
{name:'Togo',iso2:'TG',iso3:'TGO',latitude:'8',longitude:'11667',created_at:moment().format(),updated_at:moment().format()},
{name:'Tokelau',iso2:'TK',iso3:'TKL',latitude:'-9',longitude:'-172',created_at:moment().format(),updated_at:moment().format()},
{name:'Tonga',iso2:'TO',iso3:'TON',latitude:'-20',longitude:'-175',created_at:moment().format(),updated_at:moment().format()},
{name:'TrinidadandTobago',iso2:'TT',iso3:'TTO',latitude:'11',longitude:'-61',created_at:moment().format(),updated_at:moment().format()},
{name:'Trinidad&Tobago',iso2:'TT',iso3:'TTO',latitude:'11',longitude:'-61',created_at:moment().format(),updated_at:moment().format()},
{name:'Tunisia',iso2:'TN',iso3:'TUN',latitude:'34',longitude:'9',created_at:moment().format(),updated_at:moment().format()},
{name:'Turkey',iso2:'TR',iso3:'TUR',latitude:'39',longitude:'35',created_at:moment().format(),updated_at:moment().format()},
{name:'Turkmenistan',iso2:'TM',iso3:'TKM',latitude:'40',longitude:'60',created_at:moment().format(),updated_at:moment().format()},
{name:'TurksandCaicosIslands',iso2:'TC',iso3:'TCA',latitude:'21.75',longitude:'-715833',created_at:moment().format(),updated_at:moment().format()},
{name:'Tuvalu',iso2:'TV',iso3:'TUV',latitude:'-8',longitude:'178',created_at:moment().format(),updated_at:moment().format()},
{name:'Uganda',iso2:'UG',iso3:'UGA',latitude:'1',longitude:'32',created_at:moment().format(),updated_at:moment().format()},
{name:'Ukraine',iso2:'UA',iso3:'UKR',latitude:'49',longitude:'32',created_at:moment().format(),updated_at:moment().format()},
{name:'UnitedArabEmirates',iso2:'AE',iso3:'ARE',latitude:'24',longitude:'54',created_at:moment().format(),updated_at:moment().format()},
{name:'UnitedKingdom',iso2:'GB',iso3:'GBR',latitude:'54',longitude:'-2',created_at:moment().format(),updated_at:moment().format()},
{name:'UnitedStates',iso2:'US',iso3:'USA',latitude:'38',longitude:'-97',created_at:moment().format(),updated_at:moment().format()},
{name:'UnitedStatesMinorOutlyingIslands',iso2:'UM',iso3:'UMI',latitude:'192833',longitude:'166.6',created_at:moment().format(),updated_at:moment().format()},
{name:'Uruguay',iso2:'UY',iso3:'URY',latitude:'-33',longitude:'-56',created_at:moment().format(),updated_at:moment().format()},
{name:'Uzbekistan',iso2:'UZ',iso3:'UZB',latitude:'41',longitude:'64',created_at:moment().format(),updated_at:moment().format()},
{name:'Vanuatu',iso2:'VU',iso3:'VUT',latitude:'-16',longitude:'167',created_at:moment().format(),updated_at:moment().format()},
{name:'Venezuela',iso2:'VE',iso3:'VEN',latitude:'8',longitude:'-66',created_at:moment().format(),updated_at:moment().format()},
{name:'VietNam',iso2:'VN',iso3:'VNM',latitude:'16',longitude:'106',created_at:moment().format(),updated_at:moment().format()},
{name:'Vietnam',iso2:'VN',iso3:'VNM',latitude:'16',longitude:'106',created_at:moment().format(),updated_at:moment().format()},
{name:'VirginIslands(British)',iso2:'VG',iso3:'VGB',latitude:'18.5',longitude:'-64.5',created_at:moment().format(),updated_at:moment().format()},
{name:'VirginIslands(U.S.)',iso2:'VI',iso3:'VIR',latitude:'183333',longitude:'-648333',created_at:moment().format(),updated_at:moment().format()},
{name:'WallisandFutuna',iso2:'WF',iso3:'WLF',latitude:'-13.3',longitude:'-176.2',created_at:moment().format(),updated_at:moment().format()},
{name:'WesternSahara',iso2:'EH',iso3:'ESH',latitude:'24.5',longitude:'-13',created_at:moment().format(),updated_at:moment().format()},
{name:'Yemen',iso2:'YE',iso3:'YEM',latitude:'15',longitude:'48',created_at:moment().format(),updated_at:moment().format()},
{name:'Zambia',iso2:'ZM',iso3:'ZMB',latitude:'-15',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
{name:'Zimbabwe',iso2:'ZW',iso3:'ZWE',latitude:'-20',longitude:'30',created_at:moment().format(),updated_at:moment().format()},
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('countries', countries),
  down: () => Promise.resolve()
};
