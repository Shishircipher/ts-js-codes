/*Explanation:
Constructor: Takes an executor function that handles resolving or rejecting the promise.
State: Represents the status of the promise (pending, fulfilled, or rejected).
Value/Reason: Stores the resolved value or rejection reason.
Callbacks: Arrays to store onFulfilled and onRejected handlers.
Resolve/Reject: Methods to change the promise's state and invoke the relevant callbacks.
then: Registers onFulfilled and onRejected callbacks and returns a new promise.
Important Points:
This is a simplified implementation. The actual Promise.prototype.then in JavaScript engines is more complex and optimized.
The then method handles chaining by returning a new promise, allowing you to attach further then handlers.
Error handling and asynchronous behavior are crucial aspects of the Promise implementation. */
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled(value);
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (reason) => {
        try {
          const result = onRejected(reason);
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleFulfilled(this.value);
      } else if (this.state === 'rejected') {
        handleRejected(this.reason);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }
}
function printHello() {
   console.log("printHello function");
}
//x = new MyPromise(printHello);

//console.log(x);
//console.log(x.then());

const promise1 = new MyPromise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});
