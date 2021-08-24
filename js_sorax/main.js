function superAction(childAction) {
    let num1 = 10;
    let num2 = 2;
    childAction(num1, num2);
}

function summOftwo(num1, num2) {
    console.log(num1+num2)
}

function multiplyNums(num1, num2) {
    console.log(num1*num2);
}

function makeDouble1(num1, num2) {
	console.log((num1*num2)*(num1*num2));
}

function makeDouble2(num1, num2){
}

superAction()














