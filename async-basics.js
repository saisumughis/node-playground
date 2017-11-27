console.log('Starting app..');

setTimeout(()=> {
    console.log('Inside of callback')
}, 2000)

setTimeout(()=> {
    console.log('Second setTimeout')
}, 0)

console.log('Finishing up')

// call stack and event loop

// functions get executed on call stack, nodeapis -> Node APIS

// If call stack is empty, event loop looks into callback queue, adds it to call stack and executes it.
