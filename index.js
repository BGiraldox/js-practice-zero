/* -----------------------------------
//Inmediately invoke function expression (IIFE)
(function a(){
    console.log('test')
}())
*/

/* -----------------------------------
//Hoisting

//functions can be called before declared
a(1)

function a(n){
    console.log(n);
}

//Variables can not be called before declaring
console.log(x)

var x = 3
*/

/* -----------------------------------
//var would be undefinied, verified by scope
//and in the fx scope is not defined
var x = 7

var fun = () => {
    console.log(x)
    var x = 5
}

fun()
*/

/*/
//rest operator
function multiply(...nums){
    console.log(nums[0]*nums[1])
}

var arr = [5, 6]

//spread operator
multiply(...arr)
*/

/*
//Callback FN
function callback(num){
    console.log('Callback ' + num);
}

function outer(callback){
    callback(5)
}

outer(callback)
*/


/*
//Closure

function myFunctions(){
    var name = 'Pepito'
    function displayName1(){
        console.log(name)
    }
    return displayName1;
}

myFunctions()();

*/
/*
function sumFive(num1){
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3)
        }
    }
}

var addFive = sumFive(5)
addFive(10)(5) //20
addFive(60)(2) //67
*/

/*

//Run a function once

function once(func, context){
    let result;

    if(func){
        result = func.apply(context || this, arguments)
        func = null
    }
    return result;
}

const hello = once(() => console.log("hi"))

hello
hello
hello
hello
*/

/*
//Switch case statement in JavaScript?

function mySwitch(a){
    switch(a){
        case 'a':
            console.log('a')
            break

       default:
        console.log('b')
    }
}

mySwitch('a')

*/

/*
//Promises

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

*/

/*
//Async and Await
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }

  async function asyncCall2() {
    console.log('calling');
    const result = await new Promise((resolve, reject) => {
        let a = 1;
        setTimeout(() => {
            if(a == 1){
                reject('rejected');
            }else[
                resolve('resolved')
            ]
        }, 2000);
      }).then(() => console.log('hi'), () => console.log('wtf'));
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall2();


*/

/*

function a(){
    for (let index = 0; index < 3; index++) {
        a(index)
    }

    function a(index){
        setTimeout(() => {
            console.log(index)
        }, 1000);
    }
}

a()

*/

/*
let a = 1

var fun = () => {
    var ab = 7
    var b = function(){
        console.log(ab)
    }()

    if(ab == 7){
        var ac = 8
        let ad = 9
    }

    console.log(ac)
    console.log(ad)

}

fun()

*/