var server = require("./lib/server");
var router = require("./lib/router");
var requestHandlers = require("./lib/requestHandlers");
var handle = {};

handle["/"] = requestHandlers.index;
handle["/blog"] = requestHandlers.index;
handle["/article"] = requestHandlers.article;
handle["/about"] = requestHandlers.about;
handle["file"] = requestHandlers.sendFile;

server.start(router.route, handle);