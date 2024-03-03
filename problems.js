function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && (i & (i - 1)) === 0) {
            newArray.push(i);
        }
    }
    return newArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || Math.pow(n, i) < arr.length) {
            newArray.push(arr[Math.pow(n, i)]);
        } else {
            break;
        }
    }
    return newArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let newArray = [];
    for (let i = 0; i < (arr.length + 1) / 2; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let newArray = [];
    let startIndex = (arr.length % 2 === 0) ? arr.length / 2 : (arr.length + 1) / 2;

    for (let i = startIndex; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
