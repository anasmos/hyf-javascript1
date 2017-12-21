'use strict';
let x = 4;
console.log('The value of my variable x is: ' + x);
let y = 'anas';
console.log('The value of my variable y is: ' + y);
let z = true;
console.log('The value of my variable z is: ' + z);
let a = [1, 2, 3];
console.log('The value of my variable a is: ' + a);
console.log("the type of my variable x will be: 'number'");
console.log(typeof x);
console.log("the type of my variable y will be: 'string'");
console.log(typeof y);
console.log("the type of my variable z will be: 'boolean'");
console.log(typeof z);
console.log("the type of my variable a will be: 'object'");
console.log(typeof a);
if (typeof x !== typeof y && typeof x !== typeof z && typeof x !== typeof a && typeof y !== typeof z && typeof y !== typeof a && typeof z !==typeof a) {
    console.log('not the same type');
} else {
    console.log("the same type");
}