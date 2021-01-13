
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => {
    conn.write("Name: ATJ");
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect',(data) => {
    console.log(`Yo Your Connected `);
  });


}

console.log('Connecting ...');



module.exports = connect;

