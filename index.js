function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function helloFunction(){};
}

const returnsAnAnonymousFunction = function(){
    return (function(){})
}
