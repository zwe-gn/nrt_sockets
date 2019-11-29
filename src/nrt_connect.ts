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
  
  
  let nrt1pool = mysql.createPool(nrt1poolConfig);
  let nrt2pool = mysql.createPool(nrt2poolConfig);
  let nrt3pool = mysql.createPool(nrt3poolConfig);
  let nrt4pool = mysql.createPool(nrt4poolConfig);
  let nrt5pool = mysql.createPool(nrt5poolConfig);
  let nrt6pool = mysql.createPool(nrt6poolConfig);
  let max3pool = mysql.createPool(max3poolConfig);
  let max4pool = mysql.createPool(max4poolConfig);
  let max5pool = mysql.createPool(max5poolConfig);
  let max6pool = mysql.createPool(max6poolConfig);
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
      console.log("DATA " + sock.remoteAddress + ": " + data);
      // Write the data back to all the connected, the client will receive it as data from the server
      sockets.forEach((sock, index, array)=>{
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


  async function sendData(_pool: mysql.Pool,  dbtable: string)  {
     console.log('senData()');
     await _pool.query(
        `SELECT ui_name as name, material_id `, 
        
        async (
          err: mysql.QueryError,
          rows: mysql.RowDataPacket[],
          fields: mysql.FieldPacket
        ) => {
          if (err) {
            console.log("error:%s", err);
          }
    
          console.log("t_stamp=%s  ", new Date());
        }
     );
    }
    
  