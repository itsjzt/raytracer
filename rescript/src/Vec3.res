open Belt

type vec3 = (float, float, float)
type color = vec3
type point = vec3

let getX = vec => {
  let (x, _, _) = vec
  x
}

let getY = (vec: vec3) => {
  let (_, y, _) = vec
  y
}

let getZ = vec => {
  let (_, _, z) = vec
  z
}

// scalar calculations

let addFloat = (firstVec3, n) => {
  let (x, y, z) = firstVec3

  (x +. n, y +. n, z +. n)
}

let subtractFloat = (firstVec3, n) => {
  addFloat(firstVec3, -1.0 *. n)
}

let multiplyFloat = (firstVec3, n) => {
  let (x, y, z) = firstVec3

  (x *. n, y *. n, z *. n)
}

let divideFloat = (firstVec3, n) => {
  multiplyFloat(firstVec3, 1.0 /. n)
}

let length = firstVec3 => {
  let (x, y, z) = firstVec3

  Js.Math.sqrt(x *. x +. y *. y +. z *. z)
}

// vector calculations

let addVec3 = (firstVec3, secondVec3) => {
  let (x, y, z) = firstVec3
  let (x2, y2, z2) = secondVec3

  (x +. x2, y +. y2, z +. z2)
}

let subtractVec3 = (firstVec3, secondVec3) => {
  addVec3(firstVec3, multiplyFloat(secondVec3, -1.0))
}

let turnNegative = vec => {
  multiplyFloat(vec, -1.0)
}

let dotProduct = (firstVec3, secondVec3) => {
  let (x, y, z) = firstVec3
  let (x2, y2, z2) = secondVec3

  x *. x2 +. y *. y2 +. z *. z2
}

let crossProduct = (firstVec3, secondVec3) => {
  let (x, y, z) = firstVec3
  let (x2, y2, z2) = secondVec3

  (y * z2 - z * y2, z * x2 - x * z2, x * y2 - y * x2)
}

let unitVector = vec => {
  divideFloat(vec, length(vec))
}

let writeColor = color => {
  let (x, y, z) = color

  let ix = Int.toString(Float.toInt(255.999 *. x))
  let iy = Int.toString(Float.toInt(255.999 *. y))
  let iz = Int.toString(Float.toInt(255.999 *. z))

  Js.log(ix ++ " " ++ iy ++ " " ++ iz)
}
