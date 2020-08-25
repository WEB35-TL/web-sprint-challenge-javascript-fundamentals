// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboids volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  volume() {
    return this.length * this.width * this.height
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    )
  }
}

const cuboid = new CuboidMaker(4, 5, 5)

console.log(cuboid.volume()) // 100
console.log(cuboid.surfaceArea()) // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(CuboidMaker)
    this.length = attributes
    this.width = attributes
    this.height = attributes
  }
}

const cube = new CubeMaker(4)
console.log(cube.volume()) // 64
console.log(cube.surfaceArea()) // 96

// class CubeMaker extends CuboidMaker {
//   constructor(attrs) {
//     super({
//       length: attrs.side,
//       width: attrs.side,
//       height: attrs.side,
//     })
//   }

//   volume() {
//     return Math.pow(this.length, 3)
//   }

//   surfaceArea() {
//     return 6 * Math.pow(this.length, 2)
//   }
// }
// const cube = new CubeMaker({ side: 5 })
// console.log(cube)
// console.log(cube.volume()) // should be 125
// console.log(cube.surfaceArea()) // should be 150
