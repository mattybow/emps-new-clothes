import superagent from 'superagent';
import Promise from 'bluebird';
import config from '../server/config';

function formatUrl(path) {
  var url;
  if (path[0] !== '/') {
    path = '/' + path;
  }
  if (__SERVER__ || process.env.NODE_ENV !== "production") {
    // Prepend host and port of the API server to the path.
    url = 'http://localhost:' + config.port + path;
  } else {
    // Prepend `/api` to relative URL, to proxy to API server.
    url = '/api' + path;
  }
  return url;
}

export default class ApiClient {
  constructor(req) {
    ['get', 'post', 'put', 'path', 'del'].
      forEach((method) => {
        this[method] = (path, options) => {
          return new Promise((resolve, reject) => {
            var request = superagent[method](formatUrl(path));
            if (options && options.params) {
              request.query(options.params);
            }
            if (__SERVER__) {
              request.set('cookie', req.get('cookie'));
            }
            if (options && options.data) {
              request.send(options.data);
            }
            request.end((err, res) => {
              if (err) {
                reject(err);
              } else {
                resolve(res.body);
              }
            });
          });
        };
      });
  }
};
