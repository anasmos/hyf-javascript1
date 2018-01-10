'use strict';
// step 2.1
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
//step 2.2
console.log(favoriteAnimals);
//step 2.3
favoriteAnimals.splice(1, 0, "meerkat");
//step 2.4
console.log("the out put it will be the same array with adding 'meerkat' in position 1");
//step2.5
console.log(favoriteAnimals);
//step 2.6
console.log("The array has a length of: " + favoriteAnimals.length);
 favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
//step 2.9
let a = favoriteAnimals.indexOf("meerkat");
//step 2.10
console.log("The item you are looking for is at index: "+a);