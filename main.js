//indexOf
Array.prototype.indexOf2 = function (value) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (this[i] === value) return i;
    }
    return -1;
};

/*

//Test Case 1
const array = [1, 2, 3, 4, 5];
const index = array.indexOf2(3);
console.log(index);
// Test Case 2
const array2 = ["a", "b", "c", "d", "e"];
const index2 = array2.indexOf2("d");
console.log(index2);
// Test Case 3
const array3 = [];
const index3 = array3.indexOf2(5);
console.log(index3);

*/

//includes
Array.prototype.includes2 = function (value) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (this[i] === value) return true;
        if (Number.isNaN(this[i]) && Number.isNaN(value)) return true;
    }
    return false;
};

/*

//Test Case 1
const array = [1, 2, 3, 4, 5];
const includes = array.includes2(3);
console.log(includes);
// Test Case 2
const array2 = ["a", "b", "c", "d", "e"];
const includes2 = array2.includes2("d");
console.log(includes2);
// Test Case 3
const array3 = [];
const includes3 = array3.includes2(5);
console.log(includes3);
// Test case NaN
const array4 = [NaN, 1, 2, 3, 4, 5];
const includes4 = array4.includes2(NaN);
console.log(includes4);

*/

//forEach
Array.prototype.forEach2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
/* 

//Test Case 1
const colors = ["red", "green", "blue"];
colors.forEach2(function (color, index, array) {
    console.log(`Index ${index + 1}: ${color}`);
    console.log(array.push("Something"));
    console.log(array);
});
//Test Case 2
const numbers = [1, 2, 3, 4, 5];
numbers.forEach2(function (number, index, array) {
    console.log(`Index ${index + 1}: ${number}`);
    console.log(array.push(6));
    console.log(array);
});
//Test Case 3
const array = [];
array.forEach2(function (element, index, array) {
    console.log(`Index ${index + 1}: ${element}`);
    console.log(array.push(7));
    console.log(array);
});

*/

//map

Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map2((num) => num * 2);
console.log(doubledNumbers);
//Test Case 2
const names = ["Alice", "Bob", "Lucy"];
const upperCaseNames = names.map2((name) => name.toUpperCase());
console.log(upperCaseNames);
//Test Case 3
const doubleCharter = numbers.map2(function (num, index) {
    let result = "";
    const charter = "A";

    for (let i = 0; i < index + 1; i++) {
        result += charter;
    }
    return result;
});
console.log(doubleCharter);
//Test Case 4

const users = [
    {
        name: "Khôi",
        age: 18,
    },
    {
        name: "Khoa",
        age: 19,
    },
    {
        name: "Khải",
        age: 20,
    },
];

const html = users.map2((user) => {
    return `<li>${user.name} - ${user.age}</li>`;
});

console.log(`<ul>${html.join("\n")}</ul>`);
*/

//find

Array.prototype.find2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return this[i];
    }
    return undefined;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const names = ["Alice", "Bob", "Lucy"];
const longName = names.find2((name) => name.length > 4);
console.log(longName);
//Test Case 3
const users = [
    {
        name: "Khôi",
        age: 18,
    },
    {
        name: "Khoa",
        age: 19,
    },
    {
        name: "Khải",
        age: 20,
    },
];

const isAge20 = users.find2((user) => user.age === 20);
console.log(isAge20);

*/

//findLast
Array.prototype.findLast2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = length - 1; i >= 0; i--) {
        if (callback.call(thisArg, this[i], i, this)) return this[i];
    }
    return undefined;
};
/* 

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.findLast2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const names = ["Alice", "Bob", "Lucy"];
const longName = names.findLast2((name) => name.length >= 4);
console.log(longName);
//Test Case 3
const users = [
    {
        name: "Khôi",
        age: 18,
    },
    {
        name: "Khoa",
        age: 19,
    },
    {
        name: "Khải",
        age: 20,
    },
];

const isAge20 = users.findLast2((user) => user.age < 18);
console.log(isAge20);

*/

//findIndex
Array.prototype.findIndex2 = function (callback, thisArg) {
    const length = this.length;
    for (i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return i;
    }
    return -1;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.findIndex2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const arr2 = numbers.findIndex2((num) => num > 3);
console.log(arr2);

*/

Array.prototype.findLastIndex2 = function (callback, thisArg) {
    const length = this.length;
    for (i = length - 1; i >= 0; i--) {
        if (callback.call(thisArg, this[i], i, this)) return i;
    }

    return -1;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.findLastIndex2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const arr2 = numbers.findLastIndex2((num) => num > 6);
console.log(arr2);

*/

Array.prototype.filter2 = function (callback, thisArg) {
    const length = this.length;
    const result = [];
    for (i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) result.push(this[i]);
    }
    return result;
};

/*
//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.filter2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const arr2 = numbers.filter2((num) => num > 3);
console.log(arr2);

//Test Case 3
let fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "orange"
];

const counts = fruits.filter2((fruit, index) => {
    return fruits.indexOf(fruit) === index;
})

console.log(counts);
*/

//every

Array.prototype.every2 = function (callback, thisArg) {
    const length = this.length;
    if (length === 0) return true;
    let result = true;
    for (let i = 0; i < length; i++) {
        if (!callback.call(thisArg, this[i], i, this)) return (result = false);
    }
    return result;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [2, 4, 6, 8, 10];
const evenNumber = numbers.every2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const FindEvenNumber = numbers2.every2((num) => num % 2 === 0);
console.log(FindEvenNumber);

*/

//some

Array.prototype.some2 = function (callback, thisArg) {
    const length = this.length;
    if (length === 0) return false;
    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return true;
    }

    return false;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.some2((num) => num % 2 === 0);
console.log(evenNumber);
//Test Case 2
const arr2 = numbers.some2((num) => num > 6);
console.log(arr2);

//Test Case 3

const users = [
    {
        name: "Khôi",
        age: 18,
    },
    {
        name: "Khoa",
        age: 19,
    },
    {
        name: "Khải",
        age: 20,
    },
];

const isAge20 = users.some2((user) => user.age >= 20);
console.log(isAge20);

*/

//reduce
Array.prototype.reduce2 = function (callback, initialValue) {
    let result = initialValue;
    const length = this.length;
    for (let i = 0; i < length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

/*

//Test Case 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce2((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);
//Test Case 2
const products = [
    { name: "iPhone", price: 100 },
    { name: "iPad", price: 200 },
    { name: "Macbook", price: 300 },
];
const sumPrice = products.reduce2((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);
console.log(sumPrice);

//Test Case 3
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = items.reduce2((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(counts); //{apple: 3, banana: 2, orange: 1}
*/

//concat

Array.prototype.concat2 = function (originalArray) {
    const length = this.length;
    const newArray = this.slice();

    if (Array.isArray(originalArray)) {
        for (let i = 0; i < length; i++) {
            newArray.push(originalArray[i]);
        }
    } else {
        newArray.push(originalArray);
    }

    return newArray;
};
/*

//Test Case 1
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "pea"];

let combined = fruits.concat2(vegetables);
console.log(combined);
//Test Case 2
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let combined2 = a.concat2(b, c);
console.log(combined2);

*/

Array.prototype.flat2 = function (depth = 1) {
    let result = [];
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (Array.isArray(this[i])) {
            if (depth > 1) {
                //Cái này e làm không ra em hỏi chatGPT nó chỉ vậy lại ra đúng kết quả kỳ vọng nhưng em cũng... không hiểu ạ
                result = result.concat(this[i].flat2(depth - 1));
            } else {
                result = result.concat(this[i]);
            }
        } else {
            result.push(this[i]);
        }
    }
    return result;
};
/*

//Test Case 1
let arr = [1, 2, [3, 4, [5, 6]]];

let flatArray = arr.flat2(2);

console.log(flatArray);

*/
