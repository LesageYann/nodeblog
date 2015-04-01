var exec = require("child_process").exec;
var fs = require('fs');
var path = require('path');
var blogHandler = require('./lib/blog/blogHandler.js');

//handler serveur
function sendFile(response, page, mine){
  fs.readFile(path.join(__dirname, page) ,response , function (err, text) {
      if (err) {
        console.log("Aucun fichier associé à " + page);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Non trouvé");
        response.end(); 
      } else {    
        response.writeHeader(200, mine);  
        response.write(text);  
        response.end();
	  }
    });
}

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

//handler basepage
function index(response) {
  console.log("Le gestionnaire 'start' est appelé.");
  sendHTML(response, path.join(__dirname, 'blog/index.html'));
}


//handler blog
function getBillet(response) {
  console.log("Le gestionnaire 'getBillet' est appelé.");
  blogHandler.getBillets(response);
}

function article(response) {
  console.log("Le gestionnaire 'article' est appelé.");
  blogHandler.getBillets(response);
}

exports.index = index;
exports.article = article;
exports.getBillet = getBillet;
exports.sendFile = sendFile;