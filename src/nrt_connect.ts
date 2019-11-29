import net, { Socket } from "net";
import * as mysql from "mysql2/promise";

let bhspoolConfig = {
  host: "localhost",
  user: "bhs",
  password: "bhs",
  database: "db2118",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt1poolConfig = {
  host: "192.168.11.10",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt2poolConfig = {
  host: "192.168.11.12",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt3poolConfig = {
  host: "192.168.11.14",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt4poolConfig = {
  host: "192.168.11.16",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt5poolConfig = {
  host: "192.168.11.28",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt6poolConfig = {
  host: "192.168.11.20",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let max3poolConfig = {
  host: "192.168.11.26",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let max4poolConfig = {
  host: "192.168.11.28",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let max5poolConfig = {
  host: "192.168.11.30",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let max6poolConfig = {
  host: "192.168.11.32",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt01pool = mysql.createPool(nrt1poolConfig);
let nrt02pool = mysql.createPool(nrt2poolConfig);
let nrt03pool = mysql.createPool(nrt3poolConfig);
let nrt04pool = mysql.createPool(nrt4poolConfig);
let nrt05pool = mysql.createPool(nrt5poolConfig);
let nrt06pool = mysql.createPool(nrt6poolConfig);
let max03pool = mysql.createPool(max3poolConfig);
let max04pool = mysql.createPool(max4poolConfig);
let max05pool = mysql.createPool(max5poolConfig);
let max06pool = mysql.createPool(max6poolConfig);
let bhspool = mysql.createPool(bhspoolConfig);

const port = 7070;
const host = "127.0.0.1";

const server = net.createServer();
server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});
let sockets: Socket[] = [];

server.on("connection", sock => {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", data => {
    let str: string = data.toString();
    let splittted = str.split("\t", 3);
    console.log("DATA " + sock.remoteAddress + ": " + splittted[1]);
    if(splittted[0]==='nrt01'){
        updatedb(nrt01pool,+splittted[2] ,splittted[1]);
    }
        

    sockets.forEach((sock, index, array) => {
      console.log("write");
      sock.write(
        sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n"
      );
    });
  });
  sock.on("close", data => {
    let index = sockets.findIndex(o => {
      return (
        o.remoteAddress === sock.remoteAddress &&
        o.remotePort === sock.remotePort
      );
    });
    if (index !== -1) sockets.splice(index, 1);
    console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
  });
});

async function updatedb(_pool: mysql.Pool, value: number, name: string) {
  console.log("senData()");
  await _pool.query(
    "UPDATE hardware_inputs SET value = " + value + " where name =" + name,

    (err: mysql.QueryError, result: mysql.OkPacket) => {
      if (err) {
        console.log("error:%s", err);
      }
      console.log('updated ' + result.changedRows + ' rows');
      console.log("t_stamp=%s  ", new Date());
    }
  );
}
