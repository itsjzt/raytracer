"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vec = __importStar(require("./vec3"));
function rayColor(r) {
    let unit = Vec.unitVector(r.direction);
    let t = 0.5 * (Vec.getY(unit) + 1.0);
    let color1 = [0, 0, 0];
    let color2 = [0.5, 0.7, 1.0];
    return Vec.addVector(Vec.multipleNumber(color1, 1.0 - t), Vec.multipleNumber(color2, t));
}
function main() {
    const aspectRatio = 16.0 / 9.0;
    const imageWidth = 400;
    const imageHeight = Math.floor(imageWidth / aspectRatio);
    const viewportHeight = 2.0;
    const viewportWidth = aspectRatio * viewportHeight;
    const focalLength = 1.0;
    let origin = [0, 0, 0];
    let horizontal = [viewportWidth, 0, 0];
    let vertical = [0, viewportHeight, 0];
    let halfHorizontal = Vec.divideNumber(horizontal, 2);
    let halfVertical = Vec.divideNumber(vertical, 2);
    let focalVector = [0, 0, focalLength];
    // origin - horizontal/2 - vertical/2 - vec3(0, 0, focal_length);
    let lowerLeftCorner = Vec.subtractVector(focalVector, Vec.subtractVector(halfVertical, Vec.subtractVector(halfHorizontal, origin)));
    writeFileHead(imageWidth, imageHeight);
    for (let j = imageHeight - 1; j >= 0; j--) {
        console.error("Scanlines remaining: ", j);
        for (let i = 0; i <= imageWidth - 1; i++) {
            let u = i / (imageWidth - 1);
            let v = i / (imageHeight - 1);
            let horizontalByU = Vec.multipleNumber(horizontal, u);
            let verticalByV = Vec.multipleNumber(vertical, v);
            let r = {
                origin,
                direction: Vec.subtractVector(Vec.addVector(Vec.addVector(lowerLeftCorner, horizontalByU), verticalByV), origin),
            };
            let color = rayColor(r);
            Vec.writeColor(color);
        }
    }
}
function writeFileHead(imageWidth, imageHeight) {
    console.log("P3");
    console.log(`${imageWidth} ${imageHeight}`);
    console.log("255");
}
main();
