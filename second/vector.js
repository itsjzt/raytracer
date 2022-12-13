exports.Vector = class Vector {
  x = 0;
  y = 0;
  z = 0;

  constructor(a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
  }

  minus(q) {
    if (!q) {
      return new Vector(this.x * -1, this.y * -1, this.z * -1);
    } else if (typeof q === "number") {
      return new Vector(this.x - q, this.y - q, this.z - q);
    } else if (q instanceof Vector) {
      return new Vector(this.x - q.x, this.y - q.y, this.z - q.z);
    } else {
      throw new Error(`unknown type of value ${q}`);
    }
  }

  add(q) {
    if (typeof q === "number") {
      return new Vector(this.x + q, this.y + q, this.z + q);
    } else if (q instanceof Vector) {
      return new Vector(this.x + q.x, this.y + q.y, this.z + q.z);
    } else {
      throw new Error(`unknown type of value ${q}`);
    }
  }

  multiply(q) {
    if (typeof q === "number") {
      return new Vector(this.x * q, this.y * q, this.z * q);
    } else if (q instanceof Vector) {
      return new Vector(this.x * q.x, this.y * q.y, this.z * q.z);
    } else {
      throw new Error(`unknown type of value ${q}`);
    }
  }

  divide(q) {
    if (typeof q === "number") {
      return new Vector(this.x * (1 / q), this.y * (1 / q), this.z * (1 / q));
    } else if (q instanceof Vector) {
      return new Vector(
        this.x * (1 / q.x),
        this.y * (1 / q.y),
        this.z * (1 / q.z)
      );
    } else {
      throw new Error(`unknown type of value ${q}`);
    }
  }

  length() {
    return Math.sqrt(this.length_squared());
  }

  length_squared() {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  toString() {
    return `${this.x} ${this.y} ${this.z}`;
  }

  crossProduct(q) {
    if (!q instanceof Vector) throw new Error("q not type of Vector");

    return new Vector(
      this.y * q.z - this.z * q.y,
      this.z * q.x - this.x * q.z,
      this.x * q.y - this.y * q.x
    );
  }

  unitVector() {
    return this.divide(this.length());
  }
};
