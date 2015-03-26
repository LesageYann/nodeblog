//retourn une str des éléments de base d'une page html

function header(titre, motsClef) {
  return "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">"
    +"<meta name=\"Autor\" content=\"Lesage Yann\" />"
	+"<script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js\"></script>"
    +"<meta name=\"Keywords\" content=\"Lesage, Yann, Lesage Yann, informatique, programmation"+ motsClef+"\"/>"
    +"<link rel=\"stylesheet\" href=\"design/v2/blog.css\" type=\"text/css\" />"
    +"<title>"+ titre+"</title></head><body>";
}

function footer() {
  return "<footer id=\"foot\"><p>Edité par Yann Lesage. contact : ethanvaltena@rpdiv.com <a href=\"https://twitter.com/Ethan_Vatltena\">twitter</a> </footer>";
}

exports.header = header;
exports.footer = footer;