const { Vector } = require("./vector");

exports.Ray = class Ray {
  origin = new Vector(0, 0, 0);
  direction = new Vector(0, 0, 0);

  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  at(t) {
    return this.origin.add(this.direction.multiply(t));
  }
};
