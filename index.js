'use strict'

let server = require("./server");
let router = require("./router");
let requestHandlers = require("./requestHandler");

let handle = {};

handle["/"] = requestHandlers.send;
handle["/send"] = requestHandlers.send;
handle["/upload"] = requestHandlers.upload;
handle["/vim"] = requestHandlers.vim;

server.start(router.route, handle);

