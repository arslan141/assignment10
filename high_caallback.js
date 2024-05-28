// Higher Order Function
function mapArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Callback Function
function square(num) {
    return num * num;
}

// Using both in the same program
let numbers = [1, 2, 3, 4];
let squaredNumbers = mapArray(numbers, square);
console.log(squaredNumbers); 
