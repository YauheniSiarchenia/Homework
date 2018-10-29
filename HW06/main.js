'use strict';

var array1 = [123, 'string', true, {value: 321}, null],
    array2 = ['first','second', 'last'],
    result = [];

var indexR = 0;

for (var index1 = 0; index1 < array1.length; index1++) {
    result[indexR] = array1[index1];
    indexR++;
}

for (var index2 = 0; index2 < array2.length; index2++) {
    result[indexR] = array2[index2];
    indexR++;
}

console.log('result: ', result);