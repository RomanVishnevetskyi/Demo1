// Functions
import { createChessBoard } from "./src/task1.mjs";
import { envelopAnalys } from "./src/task2.mjs";
import { sortTriangles } from "./src/task3.mjs";
import { palindrome } from "./src/task4.mjs";
import { luckyTickets } from "./src/task5.mjs";
import { sequence } from "./src/task6.mjs";
import { fib } from "./src/task7.mjs";

console.log(createChessBoard(2, 2, "*"));
console.log(
  envelopAnalys({ height: 32.5, width: 42.6 }, { height: 8.6, width: 5.2 })
);
console.log(
  sortTriangles([
    { vertices: "ABC", a: 10, b: 14, c: 22.36 },
    { vertices: "ZXC", z: 4.5, x: 11.79, c: 10 },
    { vertices: "ASD", a: 6.97, s: 2, d: 8 },
  ])
);

console.log(palindrome(1234437));
console.log(luckyTickets({ min: 848548, max: 22 }));
console.log(sequence(4, 64));
console.log(fib({ length: 4 }));
console.log(fib({ min: 10, max: 25 }));
