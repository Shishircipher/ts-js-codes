/*Decorators and forwarding, call/apply
JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects, and now we’ll see how to forward calls between them and decorate them.

Transparent caching
Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.

If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.

But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.

Here’s the code, and explanations follow: */

function slow(x){
   // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)){ // if there's such key in cache
      return cache.get(x);//read the results from it
    }
    let result  = func(x); //otherwise call func
    cache.set(x, result);  // and cache (remember) the result
    return result;
};
}

slow = cachingDecorator(slow);
alert( slow(1) ); // slow(1) is cached and the result returned
alert( "Again: " + slow(1) ); // slow(1) result returned from cache
alert( slow(2) ); // slow(2) is cached and the result returned
alert( "Again: " + slow(2) ); // slow(2) result returned from cache
