const { data } = require('./data.js')
const { mostPopulated, lessPopulated } = require('./functions.js')

console.log(mostPopulated(data));
console.log(lessPopulated(data));