const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // receives welcome greeting (data) and print to screen
conn.on("data", (data) => {
  console.log("Server Message:", data);
});

// write message back to server on connection
conn.on("connect", () => {
  conn.write("Name: SNK")
 

  // conn.write("A new player has joined!");
});

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};