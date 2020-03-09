const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200);
    res.end('hello')
    return;
  }
  const parseUrl = url.parse(req.url);
  const query = querystring.parse(parseUrl.query);
  console.log(parseUrl);
  console.log(query.a);
  res.writeHead(200);
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(3000)
