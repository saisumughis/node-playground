var getUser = (id, callback) => {
    var user = {
        id,
        name: 'ABC'
    };
    setTimeout(()=> {
        callback(user);
    }, 3000);
    
};

getUser(1, (user) => {
    console.log(user);
});