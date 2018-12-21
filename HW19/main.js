"use strict"

var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

var filterData = data.filter(function (item) {
    return item.display && !item.disable;
});

var myData = filterData.map(function (item) {
    return item.text;
});

myData.forEach(function (item) {
    console.log("item 1", item);
});

// write code here uss filter, map and forEach functions of Array

// expected console.log
// 'item 1 some text 1'
// 'item 1 some text 4'
