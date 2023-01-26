let main = () => {
  let imageWidth = 256
  let imageHeight = 256

  Js.log("P3")
  Js.log(Belt.Int.toString(imageWidth) ++ " " ++ Belt.Int.toString(imageHeight))
  Js.log("255")

  for j in imageHeight - 1 to 0 {
    for i in 0 to imageWidth {
      let r = i / imageWidth
      let g = j / imageHeight
      let b = 0.25

      let ir: int = Belt.Float.toInt(255.999 * r)
      let ig: int = Belt.Float.toInt(255.999 * g)
      let ib: int = Belt.Float.toInt(255.999 * b)

      Js.log(Belt.Int.toString(ir) ++ " " ++ Belt.Int.toString(ig) ++ " " ++ Belt.Int.toString(ib))
    }
  }
}
