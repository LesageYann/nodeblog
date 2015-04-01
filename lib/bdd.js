
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://blog_lesage:XdEFf634eE@localhost:5433/database';

var client = new pg.Client(connectionString);
client.connect();
client.end();

function writeArticle(title, content){
	var query = client.query('INSERT INTO articles (title, content) VALUES ('+title+','+content+')');
	query.on('end', function() { return res.json(results); });
}

function getArticles(nb){
	var query = client.query('SELECT id_art, title, content INTO articles LIMIT 15');
	query.on('end', function() { return res.json(results); });
}

INSERT INTO piece
(fid, nom, stock)
VALUES (3,'roue', 0);

//var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
//query.on('end', function() { client.end(); });

// on laisse la gestion des erreurs a l'appellant


exports.connect = client.connect;
exports.end = client.end;
exports.writeArticle = writeArticle;