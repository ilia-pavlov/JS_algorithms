i = 5; //global variable

let func = function() {
    let i  = 10; //local variable
    console.log(i);
    let innerFunc = function() {
        var i = 15;
        console.log(i);
    };
    innerFunc();
    console.log(i);
};

func();