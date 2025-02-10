//callback
function example(number, callback) {
  setTimeout(() => {
    console.log("number" + number);
  }, 10000);
  callback(); // invoke the callback function
}

function callbackfunction() {
  console.log("i am callback function");
}

example(1, callbackfunction);

// promise
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected due to an error");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.error(error);
  });

//   async await

const test = async () => {
  try {
    const data = await fetch("http://numbersapi.com/random/math?json");
    const result = await data.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

test();
