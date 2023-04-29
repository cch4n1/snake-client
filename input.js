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
        const moveUp = function () {
          connection.write("Move: up")
        }
        setInterval(moveUp, 200)
      }
            
      if (key === 'a') {
        const moveLeft = function () {
          connection.write("Move: left")
        }
        setInterval(moveLeft, 200)
      }
            
      if (key === 's') {
        const moveDown = function () {
          connection.write("Move: down")
        }
        setInterval(moveDown, 200)
      }
            
      if (key === 'd') {
        const moveRight = function () {
          connection.write("Move: right")
        }
        setInterval(moveRight, 200)
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