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

let rover1 = new Rover([1,2], 1, 'LMLMLMLMM')
let rover2 = new Rover([3,3], 2, 'MMRMMRMRRM')

let findNext = (pos, dir) => {
  let move, moves = [[0, -1],[1, 1],[0, 1],[1, -1]]
  move = moves[dir]
  pos[move[0]] = pos[move[0]] + move[1]
  return pos
}

let turn = (direction, turned) => {
  turned === 'L' ? (direction--) : direction++
  direction < 0 && (direction = 3) 
  direction > 3 && (direction = 0) 
  return direction
}

let applyMoves = (rover) => {
  let len = rover.instr.length
  for (let i = 0; i < len; i++){
    if (rover.instr[i] != 'M'){
      rover.dir = turn(rover.dir, rover.instr[i])
    } else {
      rover.pos = findNext(rover.pos, rover.dir)
    }
  }
  return rover
}

let moveRovers = (rover1, rover2) => {
  let dir = ['W','N','E','S']
  
  rover1 = applyMoves(rover1)
  rover2 = applyMoves(rover2)

  console.log(rover1.pos, dir[rover1.dir])
  console.log(rover2.pos, dir[rover2.dir])
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