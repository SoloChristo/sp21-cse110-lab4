// function modifyArray(array, callback){
//     const newArr = []; 
//     for (let i = 0; i < array.length; i++){
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num){
//     return num * 2;
// }

// let arry = modifyArray([1,2,3], doSomething);
// console.log(arry);

let d = new Date();

function print_time(){
    let time = d.toLocaleTimeString();
    console.log(time);
}
// setInterval(print_time(), 1000);

for (let iter = true; true; ){
    let myGreeting = setTimeout(function() {
        print_time();
    }, 1000);
    myGreeting;
}