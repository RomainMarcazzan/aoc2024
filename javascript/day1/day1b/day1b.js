import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8");
const lines = data.split("\n").map((l) => l.trim().split(" "));

const clean = lines.map((l) => l.filter((a) => a !== "").map((s) => Number(s)));

const arr1 = [];
const arr2 = [];

for (let i = 0; i < clean.length; i++) {
  arr1.push(clean[i][0]);
  arr2.push(clean[i][1]);
}

let map = {};

arr2.forEach((e) => {
  if (map[e] === undefined) {
    map[e] = 1;
  } else {
    map[e]++;
  }
});

let result = 0;

for (let i = 0; i < arr1.length; i++) {
  if (map[arr1[i]]) {
    result += arr1[i] * map[arr1[i]];
  }
}
console.log("result", result);
