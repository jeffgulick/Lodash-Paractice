'use strict';
const assert = require('assert');
var chai = require('chai')
const _ = require('lodash');

let fakeData = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "walter",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

//using _.chunk method
const chunkData = (array, numElements) => {
    let newFakeData = _.chunk(array, numElements)
    return newFakeData;
}

let temp = chunkData(fakeData, 2);
console.log(fakeData.length)
console.log(temp.length)

//using _.reverse method

const reverseData = (array) => {
    let newFakeData = _.reverse(array)
    return newFakeData;
}

let temp2 = reverseData(fakeData);
console.log(temp2)

//using _.without method
const withoutData = (array, filter, f2, f3, f4) => {
    let newFakeData = _.without(array, filter, f2, f3, f4)
    return newFakeData;
}

let testFilter = 'a'

let test6Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let tempFilter = withoutData(test6Array, testFilter)
console.log(tempFilter)

//using _.shuffle

const shuffleData = (array) => {
    let newFakeData = _.shuffle(array)
    return newFakeData
}
let tempS = shuffleData(fakeData);
console.log(tempS)

// test _.capitalizeData method for strings
const capitalizeData = (string) => {
    let newFakeData = _.capitalize(string)
    return newFakeData
}

let tempC = capitalizeData(fakeData[0].name);
console.log(`changed ${fakeData[0].name} to ${tempC}`)

//test _.find method for objects

console.log(_.find(fakeData, { id: 8 }))

//_.times

const getRandomInteger = () => Math.round(Math.random() * 100);
console.log(_.times(5, getRandomInteger));

//_.keyBy
let fakeDataTemp = _.keyBy(fakeData, 'id');
console.log(fakeDataTemp['8']);

//_.random

const randomData = (num) => {
    return _.random(num)
}

console.log(randomData(200))

//_.sample


const sampleData = (array) => {
    let tempSample = _.sample(array)
    return tempSample
}

console.log(sampleData(fakeData))




// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function') {
    describe('chunk test', function () {
        it('should make 8 element array into 4 elements X 2', function () {
            // this checks chunkData function
            let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            let testTemp = chunkData(testArray, 2);
            assert.equal(testTemp.length, 4);
            assert.equal(testTemp[0][0], 'a')
        });


        it('reverse test', function () {
            // this checks reverse functionality
            let test2Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            let test2Temp = reverseData(test2Array);
            assert.equal(test2Temp[7], 'a');
            assert.equal(test2Temp[6], 'b');
            assert.equal(test2Array[0], 'h');
        });


        it('without test', function () {
            // this checks without
            let test2Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            let test2Temp = withoutData(test2Array, 'a', 'b');
            assert.equal(test2Temp.length, 6);
            assert.equal(test2Array[0], 'a');
            assert.equal(test2Temp[0], 'c');
        });

        it('shuffle test', function () {
            // this checks without
            let test2Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            let test2Temp = shuffleData(test2Array);
            let string1 = test2Array.toString();
            let string2 = test2Temp.toString();
            assert.equal(test2Temp.length, 8);
            assert.notEqual(string1, string2);

        });

        it('capitialize test', function () {
            // this checks capitalize test
            let testString = 'mark';
            let testString2 = capitalizeData(testString);
            assert.equal(testString2, 'Mark');
        });

        it('find test', function () {
            // this checks capitalize test
            let findInfo = (_.find(fakeData, { id: 8 }))
            assert.equal(findInfo.name, 'walter');
        });

        it('times test', function () {
            // this checks capitalize test
            let timesTemp = (_.times(5, getRandomInteger))
            assert.equal(timesTemp.length, 5);
        });
        it('keyBy test', function () {
            // this checks keyBy method
            let fakeDataTemp = _.keyBy(fakeData, 'id');
            console.log(fakeDataTemp['8']);
            assert.equal(fakeDataTemp['8'].name, 'walter');
        });

        it('random test', function () {
            // this checks keyBy method
            let randomTemp = randomData(20);
            let testDigit = 0;
            if ((randomTemp >= 0) && (randomTemp < 21)) { testDigit = 1 }
            assert.equal(testDigit, 1);
            chai.assert.isBelow(randomTemp, 21)

        });

        it('sample test', function () {
            // this checks keyBy method
            const pickName = ["Mark", "John", "Matt", "Lily", "Mary"];
            let tempTestSamp = sampleData(pickName)
            assert.equal(tempTestSamp.length, 4);
        });


        const luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

    });

}

