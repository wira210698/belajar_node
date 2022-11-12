const moment = require('moment'); /

const date = moment().format("MMM Do YY");
const env = process.env.NODE_ENV;
console.log(date, env);