// JSON java script object notation
let user = {
    name: 'Frankly',
    is: 2141,
    lastVisit: Date.now(),
    friends: [2314, 12412, 1411],
    toJSON: function() {
        return { //return only needed parametters like name and lastVisist
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
};

let userData = JSON.stringify(user);
console.log(userData);

console.log(JSON.parse(userData));