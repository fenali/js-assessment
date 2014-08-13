if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        console.log(arr);
        console.log(item);

        for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var total = 0;

        for (var i = 0, l = arr.length; i < l; i++) {
            total += arr[i];
            console.log(total);
        }

        return total;
    },

    remove : function(arr, item) {
        var temp = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] !== item) {
                temp.push(arr[i]);
            }
        }

        return temp;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i -= 1;
            }
        }

        return arr;
    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
