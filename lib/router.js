function route(handle, pathname, response) {
  console.log("Début du traitement de l'URL " + pathname + ".");
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    handle["file"](response, pathname, {"Content-Type": "application/javascript"})
  }
}

exports.route = route;
