/**
 * States: Fulfilled, rejected. Can be done only once. Either fulfilled or rejected. 
 *  pending, settled - fulfilled or rejected.
 */

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a +  b);
            }else {
                reject('Arguments must be numbers');
            }
        }, 1000);
    });
}
// promise chaining example
asyncAdd(5,7).then((res) => {
    console.log('Result: ', res)
    return asyncAdd(res, 33);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((res) => {
    console.log('Should be 45: ', res)
},(errorMessage) => {
    console.log(errorMessage);
})

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey, it worked!');
    }, 2000);
    
});

somePromise.then((message) => {
    console.log('Success:', message);
}, (errorMessage) => {
    console.log('Error: ' + errorMessage);
})