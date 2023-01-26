type ray = {
  origin: Vec3.point,
  direction: Vec3.vec3,
}

let rayAt = (ray, t) => {
  Vec3.addVec3(ray.origin, Vec3.multiplyFloat(ray.direction, t))
}
