// Stores the active TCP connection object.
let connection;

// handles user input
const handleUserInput = function () {
  const stdin = process.stdin;
    stdin.on('data', (key) => {
      
      // if key === ctrl + c then exit game
      if (key === '\u0003') {
        console.log('exiting game')
        process.exit();
      }

      // wasd movements
      if (key === 'w') {  
          connection.write("Move: up")  
      }
            
      if (key === 'a') {
          connection.write("Move: left")
      }
            
      if (key === 's') {
          connection.write("Move: down")
      }
            
      if (key === 'd') {
          connection.write("Move: right")
      }
    })

};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };