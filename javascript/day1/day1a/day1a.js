import fs from "fs";

const data = fs.readFileSync("data-test.txt", "utf8");

const arrayOfLines = data.split("\n");

const arrayOfLinesClean = arrayOfLines.map((l) => l.trim());

const arrayOfArrayOfLinesNoSpace = arrayOfLinesClean.map((l) =>
  l
    .split(" ")
    .filter((s) => s !== "")
    .map((n) => parseInt(n))
);

const arr1 = [];
const arr2 = [];

for (let i = 0; i < arrayOfArrayOfLinesNoSpace.length; i++) {
  arr1.push(arrayOfArrayOfLinesNoSpace[i][0]);
  arr2.push(arrayOfArrayOfLinesNoSpace[i][1]);
}

const arr1Sorted = arr1.sort((a, b) => a - b);
const arr2Sorted = arr2.sort((a, b) => a - b);

let distance = 0;

for (let j = 0; j < arr1Sorted.length; j++) {
  distance += Math.abs(arr2Sorted[j] - arr1Sorted[j]);
}

console.log(distance);
