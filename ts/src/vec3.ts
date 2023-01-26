export type vec3 = [number, number, number];
export type color = vec3;
export type point = vec3;

// unary operations
export function getX(vec3: vec3) {
  return vec3[0];
}

export function getY(vec3: vec3) {
  return vec3[1];
}

export function getZ(vec3: vec3) {
  return vec3[2];
}

// scalar calculations
export function addNumber(vec3: vec3, n: number): vec3 {
  return [vec3[0] + n, vec3[1] + n, vec3[2] + n];
}

export function subtractNumber(vec3: vec3, n: number): vec3 {
  return addNumber(vec3, -1 * n);
}

export function multipleNumber(vec3: vec3, n: number): vec3 {
  return [vec3[0] * n, vec3[1] * n, vec3[2] * n];
}

export function divideNumber(vec3: vec3, n: number): vec3 {
  return multipleNumber(vec3, 1 / n);
}

// vector calculations

export function addVector(firstVec: vec3, secondVec: vec3): vec3 {
  return [
    firstVec[0] + secondVec[0],
    firstVec[1] + secondVec[1],
    firstVec[2] + secondVec[2],
  ];
}

export function subtractVector(firstVec: vec3, secondVec: vec3): vec3 {
  return addVector(firstVec, secondVec);
}

export function lengthOfVector(vec3: vec3) {
  const lengthSquared =
    vec3[0] * vec3[0] + vec3[1] * vec3[1] + vec3[2] * vec3[2];

  return Math.sqrt(lengthSquared);
}

export function dotProduct(firstVec: vec3, secondVec: vec3): number {
  return (
    firstVec[0] * secondVec[0] +
    firstVec[1] * secondVec[1] +
    firstVec[2] * secondVec[2]
  );
}

export function crossProduct(firstVec: vec3, secondVec: vec3): vec3 {
  return [
    firstVec[1] * secondVec[2] - firstVec[2] * secondVec[1],
    firstVec[2] * secondVec[0] - firstVec[0] * secondVec[2],
    firstVec[0] * secondVec[1] - firstVec[1] * secondVec[0],
  ];
}

export function unitVector(firstVec: vec3) {
  return divideNumber(firstVec, lengthOfVector(firstVec));
}

export function writeColor(c: color) {
  const ir = Math.floor(255.999 * c[0]);
  const ig = Math.floor(255.999 * c[1]);
  const ib = Math.floor(255.999 * c[2]);

  console.log(`${ir} ${ig} ${ib}`);
}
