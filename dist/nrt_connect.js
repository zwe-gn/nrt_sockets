"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));
var mysql = __importStar(require("mysql2/promise"));
var bhspoolConfig = {
    host: "localhost",
    user: "bhs",
    password: "bhs",
    database: "db2118",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt1poolConfig = {
    host: "192.168.11.10",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt2poolConfig = {
    host: "192.168.11.12",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt3poolConfig = {
    host: "192.168.11.14",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt4poolConfig = {
    host: "192.168.11.16",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt5poolConfig = {
    host: "192.168.11.28",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt6poolConfig = {
    host: "192.168.11.20",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max3poolConfig = {
    host: "192.168.11.26",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max4poolConfig = {
    host: "192.168.11.28",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max5poolConfig = {
    host: "192.168.11.30",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max6poolConfig = {
    host: "192.168.11.32",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt01pool = mysql.createPool(nrt1poolConfig);
var nrt02pool = mysql.createPool(nrt2poolConfig);
var nrt03pool = mysql.createPool(nrt3poolConfig);
var nrt04pool = mysql.createPool(nrt4poolConfig);
var nrt05pool = mysql.createPool(nrt5poolConfig);
var nrt06pool = mysql.createPool(nrt6poolConfig);
var max03pool = mysql.createPool(max3poolConfig);
var max04pool = mysql.createPool(max4poolConfig);
var max05pool = mysql.createPool(max5poolConfig);
var max06pool = mysql.createPool(max6poolConfig);
var bhspool = mysql.createPool(bhspoolConfig);
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
        var str = data.toString();
        var recdata = str.split("\t", 4);
        console.log("DATA " + sock.remoteAddress + ": %s %s %s %s", recdata[0], recdata[1], recdata[2], recdata[3]);
        if (recdata[0] === "nrt01" && recdata[3] == "update") {
            updatedb(nrt01pool, +recdata[2], recdata[1], 'nrt01');
        }
        if (recdata[0] === "nrt01" && recdata[3] == "read") {
            readdb(nrt01pool, sock);
        }
        if (recdata[0] === "nrt02" && recdata[3] == "update") {
            updatedb(nrt02pool, +recdata[2], recdata[1], 'nrt02');
        }
        if (recdata[0] === "nrt02" && recdata[3] == "read") {
            readdb(nrt02pool, sock);
        }
        if (recdata[0] === "nrt03" && recdata[3] == "update") {
            updatedb(nrt03pool, +recdata[2], recdata[1], 'nrt03');
        }
        if (recdata[0] === "nrt03" && recdata[3] == "read") {
            readdb(nrt03pool, sock);
        }
        if (recdata[0] === "nrt04" && recdata[3] == "update") {
            updatedb(nrt04pool, +recdata[2], recdata[1], 'nrt04');
        }
        if (recdata[0] === "nrt04" && recdata[3] == "read") {
            readdb(nrt04pool, sock);
        }
        if (recdata[0] === "nrt05" && recdata[3] == "update") {
            updatedb(nrt05pool, +recdata[2], recdata[1], 'nrt05');
        }
        if (recdata[0] === "nrt05" && recdata[3] == "read") {
            readdb(nrt05pool, sock);
        }
        if (recdata[0] === "nrt06" && recdata[3] == "update") {
            updatedb(nrt06pool, +recdata[2], recdata[1], 'nrt06');
        }
        if (recdata[0] === "nrt06" && recdata[3] == "read") {
            readdb(nrt06pool, sock);
        }
        if (recdata[0] === "max03" && recdata[3] == "update") {
            updatedb(max03pool, +recdata[2], recdata[1], 'max03');
        }
        if (recdata[0] === "max03" && recdata[3] == "read") {
            readdb(max03pool, sock);
        }
        if (recdata[0] === "max04" && recdata[3] == "update") {
            updatedb(max04pool, +recdata[2], recdata[1], 'max04');
        }
        if (recdata[0] === "max04" && recdata[3] == "read") {
            readdb(max04pool, sock);
        }
        if (recdata[0] === "max05" && recdata[3] == "update") {
            updatedb(max05pool, +recdata[2], recdata[1], 'max05');
        }
        if (recdata[0] === "max05" && recdata[3] == "read") {
            readdb(max05pool, sock);
        }
        if (recdata[0] === "max06" && recdata[3] == "update") {
            updatedb(max06pool, +recdata[2], recdata[1], 'max06');
        }
        if (recdata[0] === "max06" && recdata[3] == "read") {
            readdb(max06pool, sock);
        }
        // sockets.forEach((sock, index, array) => {
        //   console.log("write");
        //   sock.write(
        //     sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n"
        //   );
        // });
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
function updatedb(_pool, value, name, mc) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("updatedb()");
                    return [4 /*yield*/, _pool.query("UPDATE hardware_inputs SET value = " +
                            value +
                            " where name ='" +
                            name +
                            "'", function (err, result) {
                            if (err) {
                                console.log("error:%s", err);
                            }
                            //console.log('updated ' + result.changedRows + ' rows');
                            console.log("updated t_stamp=%s dev:%s name:%s value:%s ", new Date(), mc, name, value);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function readdb(_pool, sockj) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("readb()");
                    return [4 /*yield*/, _pool.query("select name as name, value as value from hardware_outputs", function (err, rows, fields) {
                            if (err) {
                                console.log("error:%s", err);
                            }
                            if (rows.length > 1) {
                                var ret = rows[0]["name"] +
                                    "\t" +
                                    rows[0]["value"] +
                                    "\t" +
                                    rows[1]["name"] +
                                    "\t" +
                                    rows[1]["value"] +
                                    "\t" +
                                    rows[2]["name"] +
                                    "\t" +
                                    rows[2]["value"] +
                                    "\t" +
                                    rows[4]["name"] +
                                    "\t" +
                                    rows[4]["value"] +
                                    "\t" +
                                    rows[6]["name"] +
                                    "\t" +
                                    rows[6]["value"];
                                //console.log("read status %s: t_stamp=%s  ", ret, new Date());
                                sockj.write(ret);
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=nrt_connect.js.map