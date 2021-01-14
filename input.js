const { MOVEUP, MOVEDOWN, MOVERIGHT, MOVELEFT, MESS } = require(`../snake-client/constants`);

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
    if (key === MOVEUP) {
      connection.write('Move: up')
    } else if (key === MOVELEFT) {
      connection.write('Move: left')
    } else if (key === MOVERIGHT) {
      connection.write('Move: right')
    } else if (key === MOVEDOWN) {
      connection.write('Move: down')
    }
    connection.write('Say: Goooooo Faster !' )
  });
}



module.exports = {
  setupInput
}