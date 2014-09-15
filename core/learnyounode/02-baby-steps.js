var argumentArray = process.argv;

var arrayLength = argumentArray.length;
var sum = 0;

for (var i = 2; i < arrayLength; i++) {
    sum += +argumentArray[i];
    }

console.log(sum);
