import vec
import sys
import ray


def write_color(color: vec.Vec3):
    r = int(255.999 * color.x)
    g = int(255.999 * color.y)
    b = int(255.999 * color.z)

    print("{} {} {}".format(r, g, b))


def ray_color(r: ray.Ray):
    unit_direction = r.direction().unit_vector()
    t = 0.5 * (unit_direction.y + 1.0)
    return (1.0 - t) * vec.Color(1.0, 1.0, 1.0) + t * vec.Color(0.5, 0.7, 1.0)


def main():
    aspect_ratio = 16.0 / 9.0
    image_width = 400
    image_height = int(image_width / aspect_ratio)

    viewport_height = 2.0
    viewport_width = aspect_ratio * viewport_height
    focal_length = 1.0

    origin = vec.Vec3(0, 0, 0)
    horizontal = vec.Vec3(viewport_width, 0, 0)
    vertical = vec.Vec3(0, viewport_height, 0)
    focal_vector = vec.Vec3(0, 0, focal_length)
    lower_left_corner = origin - horizontal / 2 - \
        vertical / 2 - focal_vector

    print("P3")
    print("{} {}".format(image_width, image_height))
    print("255")

    for j in range(image_height - 1, -1, -1):
        sys.stderr.write("Scanlines remaining {}\n".format(j))
        for i in range(0, image_width):
            u = i / (image_width - 1)
            v = j / (image_height - 1)

            uh = horizontal * u
            vv = vertical * v

            r = ray.Ray(
                origin,
                lower_left_corner + u * uh + vv - origin
            )

            pixel = ray_color(r)
            write_color(pixel)
    sys.stderr.write("Done.")


if __name__ == '__main__':
    main()
