'use strict';

var array1 = [123, 'string', true, {value: 321}, null],
    array2 = ['first','second', 'last'],
    result = [];

result = result.concat (array1, array2);

console.log('result: ', result);
