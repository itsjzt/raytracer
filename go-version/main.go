package main

import "fmt"


func main() {
	imageWidth := 256
	imageHeight := 256

	fmt.Printf("P3\n")
	fmt.Printf("%d %d\n", imageWidth, imageHeight)
	fmt.Printf("255\n")

	for j := imageHeight-1; j >= 0; j-- {
		for i := 0; i < imageWidth; i++ {
			r := i / (imageWidth - 1)
			g := j / (imageHeight - 1)
			b := 0.25

			ir := int(255.999 * float32(r))
			ig := int(255.999 * float32(g))
			ib := int(255.999 * float32(b))

			fmt.Printf("%d %d %d\n", ir, ig, ib)
		}
	}
	
	
}
