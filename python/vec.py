import math


class Vec3:

    def __init__(self, x: float, y: float, z: float):
        self.x = x
        self.y = y
        self.z = z

    def __add__(self, n):
        if isinstance(n, Vec3):
            result = Vec3(self.x + n.x, self.y + n.y, self.z + n.z)
            return result
        else:
            result = Vec3(self.x + n, self.y + n, self.z + n)
            return result

    def __sub__(self, n):
        if isinstance(n, Vec3):
            result = Vec3(self.x - n.x, self.y - n.y, self.z - n.z)
            return result
        else:
            result = Vec3(self.x - n, self.y - n, self.z - n)
            return result

    def __mul__(self, n):
        if isinstance(n, Vec3):
            result = Vec3(self.x * n.x, self.y * n.y, self.z * n.z)
            return result
        else:
            result = Vec3(self.x * n, self.y * n, self.z * n)
            return result

    def __truediv__(self, n):
        if isinstance(n, Vec3):
            result = Vec3(self.x / n.x, self.y / n.y, self.z / n.z)
            return result
        else:
            result = Vec3(self.x / n, self.y / n, self.z / n)
            return result

    def dot(self, other):
        result = self.x * other.x + self.y * other.y + self.z * other.z
        return result

    def length(self):
        length_squared = self.dot(self)
        return math.sqrt(length_squared)

    def cross(self, other):
        result = Vec3(
            self.y * other.z - self.z * other.y,
            self.z * other.x - self.x * other.z,
            self.x * other.y - self.y * other.x,
        )
        return result

    def unit_vector(self):
        return self / self.length()

    def __str__(self) -> str:
        print("{} {} {}".format(self.x, self.y, self.z))


class Color(Vec3):
    pass


class Point(Vec3):
    pass
