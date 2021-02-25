const { sanitize } = require('sanitize.js');

exports.sluging = (value) => {
  return sanitize(value).replace(/\s/g, '-').toLowerCase();
};
