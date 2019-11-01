// 30 minutes max
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);


console.log(_.map(arr, function callback(x) { return x * 3}));
console.log(arr);


console.log(_.reduce(arr, function callback(x, vrc) { return x - vrc; }, 10));
console.log(_.filter(arr, function(x) { return x % 2 == 0 }));
console.log(_.find(arr, function callback(x) { return x === 20; });)






const _ = {
    map: function(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    },

    reduce: function(arr, callback, vrc) {
        let xo = 0;
        if(!vrc) {
            vrc = arr[0];
            xo = 1;
        }
        for(let i = xo; i < arr.length; i++) {
            vrc = callback(arr[i], vrc);
        }
        return vrc;
    },

    find: function(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i])) {
                return arr[i];
            }
        }
        return "That callback was not found!";
    },

    filter: function(arr, callback) {
        const temp = [];
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i])) {
                temp.push(arr[i]);
            }
        }
        return temp;
    },

    reject: function(arr, callback) {
        const temp = [];
        for(let i = 0; i < arr.length; i++) {
            if(!callback(arr[i])) {
                temp.push(arr[i]);
            }
        }
        return temp;
    }
}
