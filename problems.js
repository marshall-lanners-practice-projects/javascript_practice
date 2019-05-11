// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data)
{
  let n = 0, ar = []
  for (let i = 0; i < data.length; i++){
    switch(data[i]){
      case 'i':
        n += 1;
      break
      case 'd':
        n -= 1;
      break
      case 's':
        n *= n
      break
      case 'o':
        ar.push(n)
      break
    }
  }
  return ar
}


class Rover {
  constructor(pos, dir, instr){
    this.pos = pos,
    this.dir = dir,
    this.instr = instr
  }
}

let rover1 = new Rover([1,2], 'N', 'LMLMLMLMM')
let rover2 = new Rover([3,3], 'E', 'MMRMMRMRRM')

let findNext = (pos, direction) => {
  let nextSpot
  switch(direction){
    case 'N':
      nextSpot = [pos[0], pos[1] + 1]
    break;
    case 'E':
      nextSpot = [pos[0] + 1, pos[1]]
    break;
    case 'S':
      nextSpot = [pos[0], pos[1] - 1]
    break;
    case 'W':
      nextSpot = [pos[0] - 1, pos[1]]
    break;
  }
  return nextSpot
}

let turn = (direction, turned) => {
  let dir
  switch(direction){
    case 'N':
      turned === 'L' ? (dir = 'W') : dir = 'E'
    break;
    case 'E':
      turned === 'L' ? (dir = 'N') : dir = 'S'
    break;
    case 'S':
      turned === 'L' ? (dir = 'E') : dir = 'W'
    break;
    case 'W':
      turned === 'L' ? (dir = 'S') : dir = 'N'
    break;
  }
  return dir
}

let applyMoves = (rover) => {
  let len = rover.instr.length
  for (let i = 0; i < len; i++){
    if (rover.instr[i] != 'M'){
      rover.dir = turn(rover.dir, rover.instr[i])
    }
    if (rover.instr[i] === 'M'){
      rover.pos = findNext(rover.pos, rover.dir)
    }
  }
  return rover
}

let moveRovers = (rover1, rover2) => {
  let len1 = rover1.instr.length
  let len2 = rover2.instr.length

  rover1 = applyMoves(rover1)
  rover2 = applyMoves(rover2)

  console.log(rover1)
  console.log(rover2)
}

moveRovers(rover1, rover2)

// Input:
// 5 5
// 1 2 N 
// LMLMLMLMM 
// 3 3 E 
// MMRMMRMRRM

// Output:
// 1 3 N
// 5 1 E