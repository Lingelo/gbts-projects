import { waitpad, J_START } from 'ts2c-target-gbts/gb/gb.h';

console.log("Press START!\n");
waitpad(J_START);
console.log("> Good!");
