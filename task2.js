const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

const result = arr.filter((_, index) => index%2 == 0 );

console.log(result);