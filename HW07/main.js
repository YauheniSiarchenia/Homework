'use strict';

var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {

    result = data.sort();

    function sortNew(a, b){
        if (a > b) {
            return 1;
        } else if (a > b){
            return -1;
        } else {
            return 0;
        }
    }

    result = data.sort(sortNew);

    var resultIndex = result[5];

    data.splice(5, 1);

    data.push(resultIndex);

    var indexNew=[];

    for (var value=0; value < dataPriority.length; value++){
        for (var index=0; index < array.length; index++){
            if (typeof array[index] === dataPriority[value] && array[index] !== null){
                result = indexNew.push(array[index]);
            } else if (String(array[index]) === dataPriority[value] && array[index] === null){
                result = indexNew.push(array[index]);
            }
        }
    }
    return indexNew;
}
