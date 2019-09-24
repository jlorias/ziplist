const zipList = (arr1, arr2) => {
  const masterTemp = [];
  for (let i = 0; i < arr1.length; i++) {
    masterTemp.push(arr1[i], arr2[i]);
  }
  return masterTemp;
};

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

const zipListTheSimpleWay = (arr1, arr2) => {
  const zipped = _.zip(arr1, arr2);
  return _.flatten(zipped);
};

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
