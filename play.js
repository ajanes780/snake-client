
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

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


const handleUserInput = (key ) => {  
  if (key === '\u0003') {
  process.exit();
  }



};


const setupInput = function() {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', handleUserInput);
  
  stdin.resume();
  return stdin;
};


setupInput();





console.log('Connecting ...');


// module.exports = setupInput

module.exports = connect
