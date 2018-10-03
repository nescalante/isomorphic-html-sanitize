var sanitize = require('sanitize-html');
var config = {
  allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'li', 'b', 'i', 'strong', 'em', 'del', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead',
    'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img'],
  allowedAttributes: {
    a: ['href', 'title'],
    img: ['src', 'alt', 'width'],
    th: ['colspan', 'rowspan'],
    td: ['colspan', 'rowspan']
  },
  selfClosing: ['img', 'br', 'hr'],
  allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
  allowedSchemesByTag: {},
  allowProtocolRelative: true
};

module.exports = function (html) {
  return sanitize(html, config);
};
