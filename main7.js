//1.
var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, { key: "name", age: 18 }, ]

function myRecurs(argumentArray) {
    var currentValue = argumentArray.shift()
    if (typeof(currentValue) === 'object' && currentValue !== null) {
        var valuesOfObject = Object.values(currentValue)
        myRecurs(valuesOfObject)
        valuesOfObject.shift()
    }
    if (typeof(currentValue) !== 'object' || currentValue === null) {
        console.log(currentValue)
    }
    if (argumentArray.length) {
        myRecurs(argumentArray)
    }
}

//2.

function getSum() {
    var arr = prompt('Please enter number').split('')
    var sum = 0
    for (el of arr) {
        sum += parseInt(el)
    }
    console.log(sum)
    if (sum > 9) {
        getSum()
    }
}

//3.

function isPositive(arg) {
    if (arg >= 0) {
        return true
    } else {
        return false
    }
}

var arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]
var newArr = arr.filter(function(value) {
    return isPositive(value)
})

//4.

function getDigitsSum() {
    var enter = Number(prompt('Please enter number'))
    var arr = (enter + '').split('')
    var sum = 0
    if (Number.isInteger(enter)) {
        for (el of arr) {
            sum += parseInt(el)
        }
        console.log(sum)
    } else getDigitsSum()
}
//5.

var arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 11, 12, 13]
var newArr = arr.filter(function(value) {
    return value > 0 && value < 10
})

//7.

function getDivisors(n) {
    var divisors = [];
    i = n;
    while (i > 0) {
        if (n % i === 0) {
            divisors.push(i);
        }
        i--;
    }
    return divisors;
}


//8. 

function isEven(arg) {
    if (arg % 2 == 0) {
        return true
    } else {
        return false
    }
}

var arr = [1, 2, 3, 4, 5, 10, 15, 18]
var newArr = arr.filter(function(value) {
    return isEven(value)
})