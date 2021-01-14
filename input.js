// const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY, MESSAGES } = require('./constants');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function () {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === "w") {
      connection.write('Move: up')
    } else if (key === "a") {
      connection.write('Move: left')
    } else if (key === "d") {
      connection.write('Move: right')
    } else if (key === "s") {
      connection.write('Move: down')
    }
    connection.write('Say: Goooooo Faster !' )
  });
}



module.exports = {
  setupInput
}