#!/usr/bin/node
const args = process.argv;
if (isNaN(args[3])) {
  console.log(0);
} else {
  let pichu = 3;
  let max = args[2];
  let secmax = args[3];
  while (!isNaN(args[pichu])) {
    if (max < args[pichu]) {
      secmax = max;
      max = args[pichu];
    } else if (secmax < args[pichu] && max != args[pichu]) {
      secmax = args[pichu];
    }
    pichu++;
  }
  console.log(secmax);
}