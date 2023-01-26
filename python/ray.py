import vec


class Ray:
    def __init__(self, origin: vec.Point, direction: vec.Vec3):
        self.origin = origin
        self.direction = direction

    def at(self, t: float):
        return self.origin + t * self.direction
