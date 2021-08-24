let func = function(callback) {
    let name = 'Sorax';
    callback(name);
};

func(function(bla) {
    console.log('Hello ' + bla)
});
////////////////////////////////////////
function bio(somefunc) {
    let coach = 'mr.P';
    let age = '32'
    somefunc(coach, age);
}

function print(someArg, anotherArg) {
    console.log( someArg + ' ' + anotherArg)
}

bio(print);
///////////////////////////////////////////////

function func1(callback1) {
    let name1 = 'Sorax1';
    callback1(name1);
};

func1(function(bla1){   // function(bla1) in this case is equal callback1(name1)
                        // literaly function func1(callback1) == func1(callback1(name)) and callback1(name) can be any function with 1 arg 
    console.log('Hello ' + bla1);
});