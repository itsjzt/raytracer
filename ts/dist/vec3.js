"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeColor = exports.unitVector = exports.crossProduct = exports.dotProduct = exports.lengthOfVector = exports.subtractVector = exports.addVector = exports.divideNumber = exports.multipleNumber = exports.subtractNumber = exports.addNumber = exports.getZ = exports.getY = exports.getX = void 0;
// unary operations
function getX(vec3) {
    return vec3[0];
}
exports.getX = getX;
function getY(vec3) {
    return vec3[1];
}
exports.getY = getY;
function getZ(vec3) {
    return vec3[2];
}
exports.getZ = getZ;
// scalar calculations
function addNumber(vec3, n) {
    return [vec3[0] + n, vec3[1] + n, vec3[2] + n];
}
exports.addNumber = addNumber;
function subtractNumber(vec3, n) {
    return addNumber(vec3, -1 * n);
}
exports.subtractNumber = subtractNumber;
function multipleNumber(vec3, n) {
    return [vec3[0] * n, vec3[1] * n, vec3[2] * n];
}
exports.multipleNumber = multipleNumber;
function divideNumber(vec3, n) {
    return multipleNumber(vec3, 1 / n);
}
exports.divideNumber = divideNumber;
// vector calculations
function addVector(firstVec, secondVec) {
    return [
        firstVec[0] + secondVec[0],
        firstVec[1] + secondVec[1],
        firstVec[2] + secondVec[2],
    ];
}
exports.addVector = addVector;
function subtractVector(firstVec, secondVec) {
    return addVector(firstVec, secondVec);
}
exports.subtractVector = subtractVector;
function lengthOfVector(vec3) {
    const lengthSquared = vec3[0] * vec3[0] + vec3[1] * vec3[1] + vec3[2] * vec3[2];
    return Math.sqrt(lengthSquared);
}
exports.lengthOfVector = lengthOfVector;
function dotProduct(firstVec, secondVec) {
    return (firstVec[0] * secondVec[0] +
        firstVec[1] * secondVec[1] +
        firstVec[2] * secondVec[2]);
}
exports.dotProduct = dotProduct;
function crossProduct(firstVec, secondVec) {
    return [
        firstVec[1] * secondVec[2] - firstVec[2] * secondVec[1],
        firstVec[2] * secondVec[0] - firstVec[0] * secondVec[2],
        firstVec[0] * secondVec[1] - firstVec[1] * secondVec[0],
    ];
}
exports.crossProduct = crossProduct;
function unitVector(firstVec) {
    return divideNumber(firstVec, lengthOfVector(firstVec));
}
exports.unitVector = unitVector;
function writeColor(c) {
    const ir = Math.floor(255.999 * c[0]);
    const ig = Math.floor(255.999 * c[1]);
    const ib = Math.floor(255.999 * c[2]);
    console.log(`${ir} ${ig} ${ib}`);
}
exports.writeColor = writeColor;
