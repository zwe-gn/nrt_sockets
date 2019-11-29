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
  host: "10.100.1.130", //"192.168.11.10",
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
    let recdata = str.split("\t", 4);
    // console.log("DATA " + sock.remoteAddress + ": " + recdata[1]);
    if (recdata[0] === "nrt01" && recdata[3] == "update") {
      updatedb(nrt01pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt01" && recdata[3] == "read") {
      readdb(nrt01pool, sock);
    }
    if (recdata[0] === "nrt02" && recdata[3] == "update") {
      updatedb(nrt02pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt02" && recdata[3] == "read") {
      readdb(nrt02pool, sock);
    }
    if (recdata[0] === "nrt03" && recdata[3] == "update") {
      updatedb(nrt03pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt03" && recdata[3] == "read") {
      readdb(nrt03pool, sock);
    }
    if (recdata[0] === "nrt04" && recdata[3] == "update") {
      updatedb(nrt04pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt04" && recdata[3] == "read") {
      readdb(nrt04pool, sock);
    }
    if (recdata[0] === "nrt05" && recdata[3] == "update") {
      updatedb(nrt05pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt05" && recdata[3] == "read") {
      readdb(nrt05pool, sock);
    }
    if (recdata[0] === "nrt06" && recdata[3] == "update") {
      updatedb(nrt06pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "nrt06" && recdata[3] == "read") {
      readdb(nrt06pool, sock);
    }
    if (recdata[0] === "nrt01" && recdata[3] == "update") {
      updatedb(nrt01pool, +recdata[2], recdata[1]);
    }
    if (recdata[0] === "max03" && recdata[3] == "read") {
      readdb(max03pool, sock);
    }
    if (recdata[0] === "max04" && recdata[3] == "read") {
      readdb(max04pool, sock);
    }
    if (recdata[0] === "max05" && recdata[3] == "read") {
      readdb(max05pool, sock);
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
  console.log("updatedb()");
  await _pool.query(
    "UPDATE hardware_inputs SET value = " +
      value +
      " where name ='" +
      name +
      "'",

    (err: mysql.QueryError, result: mysql.OkPacket) => {
      if (err) {
        console.log("error:%s", err);
      }
      //console.log('updated ' + result.changedRows + ' rows');
      console.log("t_stamp=%s  ", new Date());
    }
  );
}

async function readdb(_pool: mysql.Pool, sockj: net.Socket) {
  console.log("readb()");
  await _pool.query(
    "select name as name, value as value from hardware_outputs",

    (
      err: mysql.QueryError,
      rows: mysql.RowDataPacket[],
      fields: mysql.FieldPacket
    ) => {
      if (err) {
        console.log("error:%s", err);
      }

      let ret =
        rows[0]["name"] +
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
      console.log("read status %s: t_stamp=%s  ", ret, new Date());
      sockj.write(ret);
    }
  );
}
