const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// pass returned object from connect to setupInput
const conn = connect();
setupInput(conn);