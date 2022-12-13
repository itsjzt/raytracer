const { Vector } = require("./vector");

exports.Ray = class Ray {
  origin = Vector(0, 0, 0);
  direction = Vector(0, 0, 0);

  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  at(t) {
    this.origin.add(this.direction.multiply(t));
  }
};
