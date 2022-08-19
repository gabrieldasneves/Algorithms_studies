/* mai file to test functions */

console.log("Be welcome, lets start to test functions that implements some famous algorithms. ");

// _______________________________________Binary Search__________________________________]

function binarySearch(arr, val){
    let el0 = arr[0];
    let elLast = arr[arr.length - 1];
    let middle = Math.floor((el0 + elLast)/2)

    let trying = middle;
    console.log("variaveis => el0: "+el0+" elLast :"+elLast+" middle :"+middle+" trying :"+trying)

    if(trying < val){
        el0 = middle + 1;
        arr = arr.slice(Array.from(arr).indexOf(el0),arr.length);
        console.log("novo array: "+arr)
        binarySearch(arr,val);

    }
    if(trying > val){
        elLast = middle - 1;
        arr = arr.slice(0,elLast);
        console.log("novo array: "+arr)
        binarySearch(arr,val);

    }
    if(trying === val){
        return console.log("I've found it!");
    }

}

const arr = [1,2,3,4,5,6,7,8,9,10];
let val=4;
console.log(arr);
console.log(val);
console.log(binarySearch(arr,val));