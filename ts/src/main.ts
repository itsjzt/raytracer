import * as Vec from "./vec3";
import type { point, color, vec3 } from "./vec3";
import { ray } from "ray";

function rayColor(r: ray) {
  let unit = Vec.unitVector(r.direction);

  let t = 0.5 * (Vec.getY(unit) + 1.0);
  let color1: color = [0, 0, 0];
  let color2: color = [0.5, 0.7, 1.0];

  return Vec.addVector(
    Vec.multipleNumber(color1, 1.0 - t),
    Vec.multipleNumber(color2, t)
  );
}

function main() {
  const aspectRatio = 16.0 / 9.0;
  const imageWidth = 400;
  const imageHeight = Math.floor(imageWidth / aspectRatio);

  const viewportHeight = 2.0;
  const viewportWidth = aspectRatio * viewportHeight;
  const focalLength = 1.0;

  let origin: point = [0, 0, 0];
  let horizontal: vec3 = [viewportWidth, 0, 0];
  let vertical: vec3 = [0, viewportHeight, 0];
  let halfHorizontal = Vec.divideNumber(horizontal, 2);
  let halfVertical = Vec.divideNumber(vertical, 2);
  let focalVector: vec3 = [0, 0, focalLength];
  // origin - horizontal/2 - vertical/2 - vec3(0, 0, focal_length);
  let lowerLeftCorner = Vec.subtractVector(
    focalVector,
    Vec.subtractVector(halfVertical, Vec.subtractVector(halfHorizontal, origin))
  );

  writeFileHead(imageWidth, imageHeight);
  for (let j = imageHeight - 1; j >= 0; j--) {
    console.error("Scanlines remaining: ", j);
    for (let i = 0; i <= imageWidth - 1; i++) {
      let u = i / (imageWidth - 1);
      let v = i / (imageHeight - 1);

      let horizontalByU = Vec.multipleNumber(horizontal, u);
      let verticalByV = Vec.multipleNumber(vertical, v);

      let r: ray = {
        origin,
        direction: Vec.subtractVector(
          Vec.addVector(
            Vec.addVector(lowerLeftCorner, horizontalByU),
            verticalByV
          ),
          origin
        ),
      };
      let color = rayColor(r);

      Vec.writeColor(color);
    }
  }
}

function writeFileHead(imageWidth: number, imageHeight: number) {
  console.log("P3");
  console.log(`${imageWidth} ${imageHeight}`);
  console.log("255");
}

main();
