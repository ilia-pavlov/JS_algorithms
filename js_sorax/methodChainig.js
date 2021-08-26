//method chaining
let Vec2 = function(x, y) {
    this.x = x;
    this.y = y;
};

Vec2.prototype.add = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
};

Vec2.prototype.multSaclar = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
};

let world = {
    airResistance: .9,
    wind: new Vec2(10, 1),
    control: new Vec2(-3, -5)
};

var object = {
    position: new Vec2(10, 20),
    speed: new Vec2(1, 3),
    update: function() {
        // Update object state
        this.speed
            .add(world.gravity)
            .add(world.wind)
            .add(world.control)
            .multSaclar(world.airResistance);

        return this.position.add(this.speed);
    }
};

console.log(object.position);
object.update();
console.log(object.position);

console.log(object.update());
console.log(object.update());
console.log(object.update());
console.log(object.update());
console.log(object.update());
console.log(object.update());
console.log(object.update());
console.log(object.update());