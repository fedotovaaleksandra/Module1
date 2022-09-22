const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

function someArr(arr) {
    for (let i = 0; i < arr2.length; i++ ) {
        arr1.push(arr2[i])
    }
    console.log(arr)
}

someArr(arr1);