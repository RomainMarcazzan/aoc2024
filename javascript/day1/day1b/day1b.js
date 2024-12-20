import { log } from "console";
import fs from "fs";

const data = fs.readFileSync("data-test.txt", "utf8");
const lines = data.split("\n").map((l) => l.trim().split(" "));

const clean = lines.map((l) => l.filter((a) => a !== "").map((s) => Number(s)));

const arr1 = [];
const arr2 = [];

for (let i = 0; i < clean.length; i++) {
  arr1.push(clean[i][0]);
  arr2.push(clean[i][1]);
}

const countOccurrences = (arr) => {
  const acc = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    acc[num] = (acc[num] || 0) + 1;
  }
  return acc;
};

const arr2Counts = countOccurrences(arr2);
log({ arr2Counts });

let similarityScore = 0;
for (let i = 0; i < arr1.length; i++) {
  const num = arr1[i];
  similarityScore += num * (arr2Counts[num] || 0);
}

log({ arr1, arr2, similarityScore });
