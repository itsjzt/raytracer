#include "color.h"
#include "ray.h"
#include "vec3.h"

#include <iostream>

color ray_color(const ray& r) {
    vec3 unit_direction = unit_vector(r.direction());
    auto t = 0.5*(unit_direction.y() + 1.0);
    return (1.0-t)*color(1.0, 1.0, 1.0) + t*color(0.5, 0.7, 1.0);
}

int main() {

    // Image
    const auto aspect_ratio = 16.0 / 9.0;
    const int image_width = 400;
    const int image_height = static_cast<int>(image_width / aspect_ratio);

    // Camera

    auto viewport_height = 2.0;
    auto viewport_width = aspect_ratio * viewport_height;
    auto focal_length = 1.0;

    auto origin = point3(0, 0, 0);
    auto horizontal = vec3(viewport_width, 0, 0);
    auto vertical = vec3(0, viewport_height, 0);
    auto lower_left_corner1 = origin - horizontal;
    auto lower_left_corner2 = lower_left_corner1 / 2;
    auto lower_left_corner3 = lower_left_corner2 - vertical;
    auto lower_left_corner4 = lower_left_corner3 / 2;
    auto lower_left_corner5 = lower_left_corner4 - vec3(0, 0, focal_length);



    // Render

    std::cout << "P3\n" << image_width << " " << image_height << "\n255\n";
    // std::cout << "vertical: " << vertical << " horizontal" << horizontal << " lower_left_corner: " << lower_left_corner << "\n";
    // std::cout << " lower_left_corner1: " << lower_left_corner1 << " lower_left_corner2: " << lower_left_corner2 << " lower_left_corner3: " << lower_left_corner3 << " lower_left_corner4: " << lower_left_corner4 << " lower_left_corner5: " << lower_left_corner5 << "\n";

    for (int j = image_height-1; j >= 0; --j) {
        std::cerr << "\rScanlines remaining: " << j << ' ' << std::flush;
        
        for (int i = 0; i < image_width; ++i) {
            auto u = double(i) / (image_width-1);
            auto v = double(j) / (image_height-1);
            ray r(origin, lower_left_corner5 + u*horizontal + v*vertical - origin);
            auto ray_direction = r.direction();
            auto ray_origin = r.origin();

            // std::cout << "u: " << u << " v: " << v << " ray.direction " << ray_direction << "ray.origin" << ray_origin << "\n";
            
            color pixel_color = ray_color(r);
            std::cout<<"pixel_color" << pixel_color << "\n";
            write_color(std::cout, pixel_color);
            
        }
    }

    std::cerr << "\nDone.\n";
}