let classof = function(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
};

console.log(classof(''));
console.log(classof([]));
console.log(classof({}));
console.log(classof(function() {}));
console.log(classof(2131));
console.log(classof(true));
console.log(classof(/\d/));