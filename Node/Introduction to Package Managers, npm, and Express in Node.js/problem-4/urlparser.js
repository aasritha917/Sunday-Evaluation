const url = require('url');
const querystring = require('querystring');

function parseURL(fullUrl) {
  if (!fullUrl || typeof fullUrl !== 'string') {
    return { error: 'Invalid or missing url parameter' };
  }

  const parsed = url.parse(fullUrl);
  const query = querystring.parse(parsed.query);

  return {
    hostname: parsed.hostname,
    pathname: parsed.pathname,
    query: query
  };
}

module.exports = parseURL;
