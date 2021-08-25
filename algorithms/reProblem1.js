let DB = {
    constructor: function(val1, val2) {
        this.num1 = val1;
        this.num2 = val2;
        return this;
    },
    summOftwo: function() {
        console.log(this.num1 + this.num2);
    },
    multiplyNums: function() {
        let result = this.num1 * this.num2
        console.log(result);
        return result;
        
    },
    makeDouble: function() {
        let double = this.multiplyNums() * this.multiplyNums()
        console.log(double);
    },
};

let data20Aug21, data22Auf21

data20Aug21 = Object.create(DB).
    constructor(234, 4341);
data22Auf21 = Object.create(DB).
    constructor(001, 42)

data20Aug21.summOftwo();
data22Auf21.multiplyNums();
data22Auf21.makeDouble(); // it will displays two times multiplyaNums and then Double