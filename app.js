import { calibrate } from "./src/puzzel-01";

var fs = require('fs')

console.log("\n\n --==[ Advent of Code - 2018 ] ==--\n\n")

// Puzzel 1 a
let p01 = fs.readFileSync('./input/p01.txt', 'utf8')
console.log('  Puzzel 1-1: ' + p01.split('\n').reduce(calibrate))

console.log('\n\n')
