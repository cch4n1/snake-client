const { connect } = require("./client");

const handleUserInput = function () {
  const stdin = process.stdin;
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        console.log('exiting game')
        process.exit();
      }
    })

  // your code here
  // const moveUp = function () {
  //   conn.write("Move: up")
  // }
  // setInterval(moveUp, 100)
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();

setupInput();