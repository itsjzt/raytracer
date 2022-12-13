const { range, writeColor } = require("./utils");
const { Vector } = require("./vector");

function main() {
  const imageWidth = 256;
  const imageHeight = 256;

  console.log("P3");
  console.log(`${imageWidth} ${imageHeight}`);
  console.log("255");

  for (let j of range(0, imageHeight).reverse()) {
    console.error(`Scanned line ${255 - j}`);

    for (let i of range(0, imageWidth)) {
      let pixel = new Vector(i / (imageWidth - 1), j / (imageHeight - 1), 0.25);
      // console.log({ pixel });
      writeColor(pixel);
    }
  }
}

main();
