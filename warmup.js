/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

//1
console.log("Program started");
//2
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Program complete");
  }, 3000);
  setTimeout(() => {
    reject("I failed :(");
  }, 3000);
});
//3 & 4
console.log(myPromise, "Program in progress...");
//5
myPromise.then((res) => {
  console.log(res);
});

console.log("We up.")
