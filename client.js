const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });
  
  // write message back to server on connection
  conn.on("connect", () => {
    conn.write("Name: SNK")
  });
  
  conn.on("connect", () => {
    console.log("Connected to server")
  });

  // receives welcome greeting (data) and print to screen
  conn.on("data", (data) => {
    console.log("Server Message:", data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};