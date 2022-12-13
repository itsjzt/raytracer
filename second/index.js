const { range, writeColor } = require("./utils");
const { Vector } = require("./vector");
const { Ray } = require("./ray");

function rayColor(ray) {
  let unitDirection = ray.direction.unitVector();
  let t = 0.5 * (unitDirection.y + 1.0);

  // console.log({ t });

  // TODO: this is where the problem lies
  return new Vector(1.0, 1.0, 1.0)
    .multiply(1.0)
    .subtract(t)
    .add(t)
    .multiply(new Vector(0.5, 0.7, 1.0));
}

function main() {
  // Image
  const aspectRatio = 16.0 / 9.0;
  const imageWidth = 400;
  const imageHeight = parseInt(imageWidth / aspectRatio);

  // Camera
  const viewportHeight = 2.0;
  const viewportWidth = aspectRatio * viewportHeight;
  const focalLength = 1.0;

  const origin = new Vector(0, 0, 0);
  const horizontal = new Vector(viewportWidth, 0, 0);
  const vertical = new Vector(0, viewportHeight, 0);
  /*  
   lower_left_corner1: -3.55556 0 0
   lower_left_corner2: -1.77778 0 0 
   lower_left_corner3: -1.77778 -2 0 
   lower_left_corner4: -0.888889 -1 0 
   lower_left_corner5: -0.888889 -1 -1
  */
  const lowerLeftCorner1 = origin.minus(horizontal);
  const lowerLeftCorner2 = lowerLeftCorner1.divide(2);
  const lowerLeftCorner3 = lowerLeftCorner2.minus(vertical);
  const lowerLeftCorner4 = lowerLeftCorner3.divide(2);
  const lowerLeftCorner5 = lowerLeftCorner4.minus(
    new Vector(0, 0, focalLength)
  );

  console.log("P3");
  console.log(`${imageWidth} ${imageHeight}`);
  console.log("255");

  // console.log(
  //   " lowerLeftCorner1: ",
  //   lowerLeftCorner1.toString(),
  //   " lowerLeftCorner2: ",
  //   lowerLeftCorner2.toString(),
  //   " lowerLeftCorner3: ",
  //   lowerLeftCorner3.toString(),
  //   " lowerLeftCorner4: ",
  //   lowerLeftCorner4.toString(),
  //   " lowerLeftCorner5: ",
  //   lowerLeftCorner5.toString()
  // );

  for (let j of range(0, imageHeight).reverse()) {
    console.error(`Scanned line ${255 - j}`);

    if (j === 254) break;

    for (let i of range(0, imageWidth)) {
      let u = i / (imageWidth - 1);
      let v = j / (imageHeight - 1);

      // console.log({ u,  v });

      let r = new Ray(
        origin,
        lowerLeftCorner5.add(
          horizontal.multiply(u).add(vertical.multiply(v)).minus(origin)
        )
      );
      // console.log({ r });
      let pixel_color = rayColor(r);
      console.log({ pixel_color });

      writeColor(pixel_color);
    }
  }
}

main();
