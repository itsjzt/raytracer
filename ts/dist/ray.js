"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayAt = void 0;
const vec3_1 = require("vec3");
function rayAt(r, t) {
    return (0, vec3_1.addVector)(r.origin, (0, vec3_1.multipleNumber)(r.direction, t));
}
exports.rayAt = rayAt;
