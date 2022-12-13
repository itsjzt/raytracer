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
      x *= -1;
      y *= -1;
      z *= -1;
    } else if (typeof q === "number") {
      x -= q;
      y -= q;
      z -= q;
    } else if (q instanceof Vector) {
      x -= q.x;
      y -= q.y;
      z -= q.z;
    } else {
      throw new Error(`unknown type of value ${q}`);
    }

    return this;
  }

  add(q) {
    if (typeof q === "number") {
      x += q;
      y += q;
      z += q;
    } else if (q instanceof Vector) {
      x += q.x;
      y += q.y;
      z += q.z;
    } else {
      throw new Error(`unknown type of value ${q}`);
    }

    return this;
  }

  multiply(q) {
    if (typeof q === "number") {
      x *= q;
      y *= q;
      z *= q;
    } else if (q instanceof Vector) {
      x *= q.x;
      y *= q.y;
      z *= q.z;
    } else {
      throw new Error(`unknown type of value ${q}`);
    }

    return this;
  }

  divide(q) {
    if (typeof q === "number") {
      x *= 1 / q;
      y *= 1 / q;
      z *= 1 / q;
    } else if (q instanceof Vector) {
      x *= 1 / q.x;
      y *= 1 / q.y;
      z *= 1 / q.z;
    } else {
      throw new Error(`unknown type of value ${q}`);
    }

    return this;
  }

  length() {
    return Math.sqrt(this.length_squared());
  }

  length_squared() {
    return x ** 2 + y ** 2 + z ** 2;
  }

  printable() {
    return `${x} ${y} ${z}`;
  }

  crossProduct(q) {
    if (!q instanceof Vector) throw new Error("q not type of Vector");

    x = this.y * q.z - this.z * q.y;
    y = this.z * q.x - this.x * q.z;
    z = this.x * q.y - this.y * q.x;

    return this;
  }

  unitVector() {
    return v.divide(v.length());
  }
};
