'use strict';
import {socketConfig} from "./socket.config";

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http_1 = require("http");

const app = express();
app.use(express.static(__dirname + '/dist/sync-watch-application'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/sync-watch-application/index.html'));
});
const server = http_1.createServer(app);
const io = socketIO(server);
server.listen(process.env.PORT || 8080);

io.on(socketConfig.connect, function (socket) {
  let room = '';
  let username = '';
  socket.on(socketConfig.online, function (chatRoom, name) {
    socket.join(chatRoom);
    room = chatRoom;
    username = name;
  });
  socket.on(socketConfig.send, function (m) {
    /** send message */
    io.to(room).emit(socketConfig.send, m);
  });
  socket.on(socketConfig.disconnect, function () {
    /** set user to offline */
  });
});
