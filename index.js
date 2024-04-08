
function receivesAFunction (callback){
    callback()
}

function returnsANamedFunction(){
    var fn;
    function before (){
        fn = returnsANamedFunction();
    }
    return before;
}


function returnsAnAnonymousFunction(fnu){

    return function(){
        return fnu = returnsAnAnonymousFunction
    }

}
returnsAnAnonymousFunction()