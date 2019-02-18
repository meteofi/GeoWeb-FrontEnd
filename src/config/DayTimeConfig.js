const DATE_LABEL_FORMAT = 'DD MMM YYYY';
const HOUR_LABEL_FORMAT = 'HH';
const MINUTE_LABEL_FORMAT = 'mm';
const UTC_LABEL_FORMAT = 'UTC';
const MINUTE_LABEL_FORMAT_UTC = `${MINUTE_LABEL_FORMAT} [${UTC_LABEL_FORMAT}]`;
const TIME_LABEL_FORMAT = `${HOUR_LABEL_FORMAT}:${MINUTE_LABEL_FORMAT}`;
const TIME_LABEL_FORMAT_UTC = `${HOUR_LABEL_FORMAT}:${MINUTE_LABEL_FORMAT_UTC}`;
const DATETIME_LABEL_FORMAT = `${DATE_LABEL_FORMAT} ${TIME_LABEL_FORMAT}`;
const DATETIME_LABEL_FORMAT_UTC = `${DATE_LABEL_FORMAT} ${TIME_LABEL_FORMAT_UTC}`;
const DATETIME_START_FORMAT = `${DATE_LABEL_FORMAT}, ${TIME_LABEL_FORMAT}`;
const DATETIME_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss[Z]';
const CALENDAR_FORMAT = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: '[Next] dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: `${DATE_LABEL_FORMAT}`
};

module.exports = {
  DATE_LABEL_FORMAT: DATE_LABEL_FORMAT,
  HOUR_LABEL_FORMAT: HOUR_LABEL_FORMAT,
  MINUTE_LABEL_FORMAT: MINUTE_LABEL_FORMAT,
  MINUTE_LABEL_FORMAT_UTC: MINUTE_LABEL_FORMAT_UTC,
  TIME_LABEL_FORMAT: TIME_LABEL_FORMAT,
  TIME_LABEL_FORMAT_UTC: TIME_LABEL_FORMAT_UTC,
  DATETIME_LABEL_FORMAT: DATETIME_LABEL_FORMAT,
  DATETIME_LABEL_FORMAT_UTC: DATETIME_LABEL_FORMAT_UTC,
  DATETIME_START_FORMAT: DATETIME_START_FORMAT,
  DATETIME_FORMAT: DATETIME_FORMAT,
  CALENDAR_FORMAT: CALENDAR_FORMAT
};
