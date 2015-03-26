var exec = require("child_process").exec;
var fs = require('fs');
var path = require('path');


function sendHTML(response, page){
  fs.readFile(page ,response , function (err, html) {
      if (err) {
        throw err; 
      }       
      response.writeHeader(200, {"Content-Type": "text/html"});  
      response.write(html);  
      response.end();
    });
}

function index(response) {
  console.log("Le gestionnaire 'start' est appelé.");
  sendHTML(response, path.join(__dirname, 'blog/index.html'));
}

function article(response) {
  console.log("Le gestionnaire 'article' est appelé.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("test");
  /*response.write(base.header("article", "article, blog"));
  response.write("Bonjour Upload");
  response.write(base.footer());*/
  response.end();
}

exports.index = index;
exports.article = article;