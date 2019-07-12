class Rover {
  constructor(pos, dir, instr){
    this.pos = pos,
    this.dir = dir,
    this.instr = instr
  }
}
let dir = ['W','N','E','S'], 
south = 3, west = 0,
rover1, rover2

let validateHelper = (rover, validate) => {
  if (
    rover.pos[0] < 0 ||
    rover.pos[0] > grid[0] ||
    rover.pos[1] < 0 || 
    rover.pos[1] > grid[1]
  ) {
    validate.errors.push('rover set off the grid')
    validate.inValid = true
  }
  return validate
}

/* validateHelper
  helper function for checking if the rover has
  been set off the grid
*/

let validateHelper2 = (rover, validate) => {
  validInstr = new Set(['L', 'R', 'M'])
  for (let i = 0; i < rover.instr.length; i++){
    if (!validInstr.has(rover.instr[i])){
      validate.errors.push('rover formatted with incorrect character')
      validate.inValid = true
      break
    }
  }
  return validate
}

/* validateHelper2
  helper function for checking if the rover has 
  an incorrect character in it's instructions
*/

let invalidInput = (rover1, rover2, grid) => {
  let rp1 = rover1.pos, rp2 = rover2.pos,
  validate = {errors: [], inValid: false}

  validate = validateHelper(rover1, validate)
  validate = validateHelper(rover2, validate)
  validate = validateHelper2(rover1, validate)
  validate = validateHelper2(rover2, validate)

  if (grid[0] < 0 || grid[1] < 0){
    validate.errors.push('grid has negative value')
    validate.inValid = true
  }

  if (rp1.toString() === rp2.toString()){
    validate.errors.push('rovers positioned at same location')
    validate.inValid = true
  }

  validate.errors.forEach(error => {
    console.log(error)
  })

  return validate.inValid
}

/* invalidInput
  function used to stop main function if input is invalid:
  if either rover is set off the grid
  if either rover's instructions is formatted with an incorrect character
  if the grid contains a negative value
  if both rovers are positioned at the same starting location
*/

let preventCrash = (pos, grid, ending) => {
  if (ending && pos.toString() === ending.toString()){
    console.log(`rover collision prevented at ${pos}`)
    return true
  } else if (pos[0] < 0 || pos[1] < 0){
    console.log(`plateau fall prevented at ${pos}`)
    return true
  } else if (pos[0] > grid[0] || pos[1] > grid[1]){
    console.log(`plateau fall prevented at ${pos}`)
    return true
  }  
  return false
}

/* preventCrash
  method is used to validate if the second rover will
  crash into the first rover or if either the first or
  second rover will fall of the edge of the plateau
*/

let findNext = (pos, dir, grid, ending) => {
  let move, moves = [[0, -1],[1, 1],[0, 1],[1, -1]]
  move = moves[dir]
  pos[move[0]] = pos[move[0]] + move[1]
  if (preventCrash(pos, grid, ending)){
    pos[move[0]] = pos[move[0]] - move[1]
  }
  return pos
}

/* findNext
  method is used to find the next position of the rover
  and is executed each time the 'M' command is entered
  takes the current rover position and its direction
  and either adds or subtracts 1 from the x or y position
  resets to old position if there will be a crash
*/

let turn = (direction, turned) => {
  turned === 'L' ? (direction--) : direction++
  direction < 0 && (direction = south) 
  direction > 3 && (direction = west) 
  return direction
}

/* turn
  function is used turn the rover from its current position
  and is executed each time the 'L' or 'R' command is entered
  the position is represented by numbers 0 to 3 
  returns the new direction
*/

let applyMoves = (rover, grid, ending) => {
  let len = rover.instr.length
  for (let i = 0; i < len; i++){
    if (rover.instr[i] != 'M'){
      rover.dir = turn(rover.dir, rover.instr[i])
    } else {
      rover.pos = findNext(rover.pos, rover.dir, grid, ending)
    }
  }
  return rover
}

/* applyMoves
  function loops through the instructions of the rovers and 
  applies the turn or findNext function depending on the input 
*/

let moveRovers = (rover1, rover2, grid) => {
  if (invalidInput(rover1, rover2, grid)){
    return
  }
  rover1 = applyMoves(rover1, grid)
  let ending = rover1.pos
  rover2 = applyMoves(rover2, grid, ending)
  console.log(rover1.pos, dir[rover1.dir])
  console.log(rover2.pos, dir[rover2.dir])
  console.log()
}

/* moveRovers
  main function used to execute the entire program
*/

// test case 1 - no prevented falls or collisions
rover1 = new Rover([1,2], 1, 'LMLMLMLMM')
rover2 = new Rover([3,3], 2, 'MMRMMRMRRM')
grid = [5,5]
moveRovers(rover1, rover2, grid)

//test case 2 - prevent rovers from falling
rover1 = new Rover([2,3], 2, 'LLRMM')
rover2 = new Rover([3,4], 3, 'LRMMMMM')
grid = [5,4]
moveRovers(rover1, rover2, grid)

//test case 3 - prevent rover collisions
rover1 = new Rover([3,3], 3, 'LLRMM')
rover2 = new Rover([3,5], 3, 'LMMRMM')
grid = [6,5]
moveRovers(rover1, rover2, grid)

//test case 4 - prevent invalid rover input
rover1 = new Rover([3,3], 3, 'LLRMMa')
rover2 = new Rover([3,3], 3, 'LMMRMMa')
grid = [-5,5]
moveRovers(rover1, rover2, grid)
