open Vec3
open Belt

let writeFileHeader = (~width, ~height) => {
  Js.log("P3")
  Js.log(Int.toString(width) ++ " " ++ Int.toString(height))
  Js.log("255")
}

let rayColor = (r: Ray.ray) => {
  let unitDirection = unitVector(r.direction)
  let t = getY(unitDirection) +. 1.0 *. 0.5

  let color = (1.0, 1.0, 1.0)
  let color2 = (0.5, 0.7, 1.0)

  addVec3(multiplyFloat(color, 1.0 -. t), multiplyFloat(color2, t))
}

let main = () => {
  let aspectRatio = 16.0 /. 9.0
  let imageWidth = 400
  let imageHeight = Float.toInt(Int.toFloat(imageWidth) /. aspectRatio)

  let viewportHeight = 2.0
  let viewportWidth = aspectRatio *. viewportHeight
  let focalLength = 1.0

  let origin = (0.0, 0.0, 0.0)
  let horizontal = (viewportWidth, 0.0, 0.0)
  let vertical = (0.0, viewportHeight, 0.0)
  // origin - horizontal/2 - vertical/2 - vec3(0, 0, focal_length);
  let halfHorizontal = divideFloat(horizontal, 2.0)
  let halfVertical = divideFloat(vertical, 2.0)
  let focalVector = (0.0, 0.0, focalLength)
  let lowerLeftCorner = subtractVec3(
    subtractVec3(subtractVec3(origin, halfHorizontal), halfVertical),
    focalVector,
  )

  writeFileHeader(~width=imageWidth, ~height=imageHeight)

  for j in imageHeight - 1 downto 0 {
    Js.Console.error("Scanlines remaining: " ++ Int.toString(j))
    for i in 0 to imageWidth - 1 {
      let u = i / (imageWidth - 1)
      let v = j / (imageHeight - 1)

      let ray: Ray.ray = {
        origin,
        // lower_left_corner + u*horizontal + v*vertical - origin
        direction: subtractVec3(
          addVec3(
            addVec3(lowerLeftCorner, multiplyFloat(horizontal, Int.toFloat(u))),
            multiplyFloat(vertical, Int.toFloat(v)),
          ),
          origin,
        ),
      }
      // Js.Console.error("ray" ++ ray.direction ++ ray.origin)

      let pixel = rayColor(ray)

      Vec3.writeColor(pixel)
    }
  }
  Js.Console.error("Done.")
}

main()
