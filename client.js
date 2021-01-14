const net = require('net');
const { MAX_IDLE_TIMEOUT } = require('../snek-multiplayer/src/constants');
const { IP, PORT, PLAYER_INITIALS } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  conn.on("connect", () => console.log("Successfully connected to game server"));
  conn.on("data", (data) => console.log(data))
  conn.on('connect', () => {
    conn.write('Name: ' + PLAYER_INITIALS);
    conn.on('end', () => {
      console.log("Connection End");
    });
  });
  conn.setEncoding('utf8');
  return conn;
}
module.exports = {
  connect
}; 