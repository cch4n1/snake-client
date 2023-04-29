// Stores the active TCP connection object.
let connection;
// interval variable is stored and cleared so one interval is running at a time.
let interval;

// handles user input
const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {

    // ctrl + c to exit game
    if (key === '\u0003') {
      console.log('Exiting game');
      process.exit();
    }

    // built-in js function clears interval timer
    clearInterval(interval);

    // wasd movements
    if (key === 'w') {
      // sets interval of movements
      interval = setInterval(() => {
        connection.write("Move: up");
        // change number to adjust speed
      }, 100);
    }

    if (key === 'a') {
      interval = setInterval(() => {
        connection.write("Move: left");
      }, 100);
    }

    if (key === 's') {
      interval = setInterval(() => {
        connection.write("Move: down");
      }, 100);
    }

    if (key === 'd') {
      interval = setInterval(() => {
        connection.write("Move: right");
      }, 100);
    }

    // chat commands
    if (key === '1') {
      connection.write("Say: Hello!");
    }

    if (key === '2') {
      connection.write("Say: I'm winning!");
    }

    if (key === '3') {
      connection.write("Say: I'm losing!");
    }

    if (key === '4') {
      connection.write("Say: I don't believe you!");
    }

    if (key === '5') {
      connection.write("Say: Good Game!");
    }

    if (key === '6') {
      connection.write("Say: Goodbye!");
    }
  });


};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };