/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/
//1
console.log("program started");
//2
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Program complete");
  }, 3000);

  setTimeout(() => {
    return reject();
  }, 3000);
});
//3
console.log(myPromise);
//4
console.log("Program in progress");
//5


myPromise // res takes the value inside of our pending promise above.
  .then((res) => {
    console.log(res);
  })
//   .catch((err) => {
//     console.log("Program failure");
//   });
