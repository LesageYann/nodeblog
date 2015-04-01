var bdd = require('./lib/bdd.js');

function getBillets(response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(getArticles(15));
  response.end();
}


exports.getBillets = getBillets;
exports.article = article; 