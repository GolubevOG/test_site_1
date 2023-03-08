"use strict";
console.log("start script");

function newFact(n = 42) {
  let number = document.getElementById("inputNumber");
  n = number.value;
  if (n == "value") {
    n = 42;
  }
  console.log(n, "value");
  let text = `${n}`;
  // console.log(text);
  fetchText(n);
}

async function fetchText(number = 42) {
  let url = `http://numbersapi.com/${number}`;
  let response = await fetch(url);
  let data = await response.text();
  console.log(data);
  let date = new Date()
  console.log(date);
}

console.log("stop script");
