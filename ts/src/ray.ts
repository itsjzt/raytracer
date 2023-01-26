import { addVector, multipleNumber, point, vec3 } from "vec3";

export interface ray {
  origin: point;
  direction: vec3;
}

export function rayAt(r: ray, t: number) {
  return addVector(r.origin, multipleNumber(r.direction, t));
}
