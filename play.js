const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connectReturn = connect();

setupInput(connectReturn);