const _ = require('lodash');

const itemList = [1, [2, [3, [4]]]];
const flatItem = _.flattenDeep(itemList)
console.log(flatItem);