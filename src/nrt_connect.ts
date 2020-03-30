import net, { Socket } from "net";
import * as mysql from "mysql2/promise";


let bhspoolConfig = {
  host: "localhost",
  user: "bhs",
  password: "bhs",
  database: "db1",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let nrt1poolConfig = {
  host: "192.168.11.10",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let nrt2poolConfig = {
  host: "192.168.11.12",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let nrt3poolConfig = {
  host: "192.168.11.14",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let nrt4poolConfig = {
  host: "192.168.11.16",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

/* let nrt5poolConfig = {
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
 */
let max1poolConfig = {
  host: "192.168.11.24",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let max2poolConfig = {
  host: "192.168.11.26",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let max3poolConfig = {
  host: "192.168.11.28",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let max4poolConfig = {
  host: "192.168.11.30",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};

let max5poolConfig = {
  host: "192.168.11.32",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};


let nrt1pool = mysql.createPool(nrt1poolConfig);
let nrt2pool = mysql.createPool(nrt2poolConfig);
let nrt3pool = mysql.createPool(nrt3poolConfig);
let nrt4pool = mysql.createPool(nrt4poolConfig);
//let nrt5pool = mysql.createPool(nrt5poolConfig);
//let nrt6pool = mysql.createPool(nrt6poolConfig);
let max1pool = mysql.createPool(max1poolConfig);
let max2pool = mysql.createPool(max2poolConfig);
let max3pool = mysql.createPool(max3poolConfig);
let max5pool = mysql.createPool(max5poolConfig);
let max4pool = mysql.createPool(max4poolConfig);
let bhspool = mysql.createPool(bhspoolConfig);

const port = 12345;
const host = "127.0.0.1";

const server = net.createServer();
server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});
let sockets: Socket[] = [];

server.on("connection", sock => {
  //console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", data => {
    let str: string = data.toString();
    let recdata = str.split("\t", 4);
    //console.log("DATA " + sock.remoteAddress + ": %s %s %s %s", recdata[0], recdata[1], recdata[2], recdata[3]);
    if (recdata[0] === "nrt01" && recdata[3] == "update") {
      updatedb(nrt1pool, +recdata[2], recdata[1],'nrt01');
    }
    if (recdata[0] === "nrt01" && recdata[3] == "watchdog") {
      watchdog(nrt1pool,'nrt01');
    }
    if (recdata[0] === "nrt01" && recdata[3] == "read") {
      readdb(nrt1pool, sock,'nrt01');
    }
    if (recdata[0] === "nrt02" && recdata[3] == "update") {
      updatedb(nrt2pool, +recdata[2], recdata[1],'nrt02');
    }
    if (recdata[0] === "nrt02" && recdata[3] == "watchdog") {
      watchdog(nrt2pool,'nrt02');
    }
    if (recdata[0] === "nrt02" && recdata[3] == "read") {
      readdb(nrt2pool, sock,'nrt02');
    }
    if (recdata[0] === "nrt03" && recdata[3] == "update") {
      updatedb(nrt3pool, +recdata[2], recdata[1],'nrt03');
    }
    if (recdata[0] === "nrt03" && recdata[3] == "watchdog") {
      watchdog(nrt3pool,'nrt03');
    }
    if (recdata[0] === "nrt03" && recdata[3] == "read") {
      readdb(nrt3pool, sock,'nrt03');
    }
    if (recdata[0] === "nrt04" && recdata[3] == "update") {
      updatedb(nrt4pool, +recdata[2], recdata[1],'nrt04');
    }
    if (recdata[0] === "nrt04" && recdata[3] == "watchdog") {
      watchdog(nrt4pool,'nrt04');
    }
    if (recdata[0] === "nrt04" && recdata[3] == "read") {
      readdb(nrt4pool, sock,'nrt04');
    }
  /*   if (recdata[0] === "nrt05" && recdata[3] == "update") {
      updatedb(nrt05pool, +recdata[2], recdata[1],'nrt05');
    }
    if (recdata[0] === "nrt05" && recdata[3] == "read") {
      readdb(nrt05pool, sock);
    }
    if (recdata[0] === "nrt06" && recdata[3] == "update") {
      updatedb(nrt06pool, +recdata[2], recdata[1],'nrt06');
    }
    if (recdata[0] === "nrt06" && recdata[3] == "read") {
      readdb(nrt06pool, sock); 
    }*/
    if (recdata[0] === "max03" && recdata[3] == "update") {
      updatedb(max3pool, +recdata[2], recdata[1],'max03');
    }
    if (recdata[0] === "max03" && recdata[3] == "watchdog") {
      watchdog(max3pool,'max03');
    }
    if (recdata[0] === "max03" && recdata[3] == "read") {
      readdb(max3pool, sock,'max03');
    }
    if (recdata[0] === "max04" && recdata[3] == "update") {
      updatedb(max4pool, +recdata[2], recdata[1],'max04');
    }
    if (recdata[0] === "max04" && recdata[3] == "watchdog") {
      watchdog(max4pool,'max04');
    }
    if (recdata[0] === "max04" && recdata[3] == "read") {
      readdb(max4pool, sock,'max04');
    }
    if (recdata[0] === "max05" && recdata[3] == "update") {
      updatedb(max5pool, +recdata[2], recdata[1],'max05');
    }
    if (recdata[0] === "max05" && recdata[3] == "watchdog") {
      watchdog(max5pool,'max05');
    }
    if (recdata[0] === "max05" && recdata[3] == "read") {
      readdb(max5pool, sock,'max05');
    }
    if (recdata[0] === "max01" && recdata[3] == "update") {
      updatedb(max1pool, +recdata[2], recdata[1],'max01');
    }
    if (recdata[0] === "max01" && recdata[3] == "watchdog") {
      watchdog(max1pool,'max01');
    }
    if (recdata[0] === "max01" && recdata[3] == "read") {
      readdb(max1pool, sock,'max01');
    }
    if (recdata[0] === "max02" && recdata[3] == "update") {
      updatedb(max2pool, +recdata[2], recdata[1],'max02');
    }
    if (recdata[0] === "max02" && recdata[3] == "watchdog") {
      watchdog(max2pool,'max02');
    }
    if (recdata[0] === "max02" && recdata[3] == "read") {
      readdb(max2pool, sock,'max02');
    }
    
    // sockets.forEach((sock, index, array) => {
    //   console.log("write");
    //   sock.write(
    //     sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n"
    //   );
    // });
  });

  // sock.on("close", data => {
  //   let index = sockets.findIndex(o => {
  //     return (
  //       o.remoteAddress === sock.remoteAddress &&
  //       o.remotePort === sock.remotePort
  //     );
  //   });
  //   if (index !== -1) sockets.splice(index, 1);
  //   console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
  // });
});

async function updatedb(_pool: mysql.Pool, value: number, name: string , mc:string ) {
  console.log("updatedb()");
  await _pool.query(
    "UPDATE " +
    "hardware_inputs"  +
    " SET value = " +
    value +
    " where name ='" +
    name +
    "'",

    (err: mysql.QueryError, result: mysql.OkPacket) => {
      if (err) {
        console.log("db:%s error:%s", mc, err);
      }
      //console.log('updated ' + result.changedRows + ' rows');
      console.log("db:%s  updated t_stamp=%s dev:%s name:%s value:%s ", mc, new Date(),mc,name,value);
    }
  );
}

async function watchdog(_pool: mysql.Pool, mc:string) {
  console.log("updatedb()");
  await _pool.query(
    "UPDATE " +
    "hardware_outputs"  +
    " SET value = 1" +    
    " where name ='" +
    "watchdog" +
    "'",

    (err: mysql.QueryError, result: mysql.OkPacket) => {
      if (err) {
        console.log("db:%s watchdog error:%s", mc, err);
      }
      //console.log('updated ' + result.changedRows + ' rows');
      console.log("db:%s  watchdog t_stamp=%s ", mc, new Date());
    }
  );
}

async function readdb(_pool: mysql.Pool, sockj: net.Socket, mc:string) {
  //console.log("readb()");
  await _pool.query(
    "select name as name, value as value from hardware_outputs",

    (
      err: mysql.QueryError,
      rows: mysql.RowDataPacket[],
      fields: mysql.FieldPacket
    ) => {
      if (err) {
        console.log("readdb() db=%s error:%s",mc, err);
      }
      if (rows.length > 1) {
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
       console.log("read() db=%s   t_stamp=%s  ",mc, new Date());
        sockj.write(ret);
      }

    }
  );
}
