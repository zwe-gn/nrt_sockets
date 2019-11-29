"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));
var port = 7070;
var host = "127.0.0.1";
var server = net_1.default.createServer();
server.listen(port, host, function () {
    console.log("TCP Server is running on port " + port + ".");
});
var sockets = [];
server.on("connection", function (sock) {
    console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
    sockets.push(sock);
    sock.on("data", function (data) {
        console.log("DATA " + sock.remoteAddress + ": " + data);
        // Write the data back to all the connected, the client will receive it as data from the server
        sockets.forEach(function (sock, index, array) {
            sock.write(sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n");
        });
    });
    sock.on("close", function (data) {
        var index = sockets.findIndex(function (o) {
            return (o.remoteAddress === sock.remoteAddress &&
                o.remotePort === sock.remotePort);
        });
        if (index !== -1)
            sockets.splice(index, 1);
        console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
    });
});
