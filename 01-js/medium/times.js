/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const startTime = new Date().getTime();

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date().getTime();
  const elapsedTime = endTime - startTime;
}

/*
we can also use console.time() - this doesn't returns any variable 
but we can surely check the runTime of our JS code with this.
*/
function calculateTime_alternate(n) {
  console.time("time");
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.timeEnd("time");
}

/*
we generally do not use time if we just want to calc out timeline of the function as 
time module takes computation time but console.time / timeEnd is the inbuilt functions
*/

// calculateTime_alternate(100)
