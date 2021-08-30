"use strict";

let turnSwitchYearly = document.querySelector(".yearly");
let turnSwitchMonthly = document.querySelector(".monthly");
let basicPlan = document.querySelector(".basic .amount");
let profPlan = document.querySelector(".professional .amount");
let masterPlan = document.querySelector(".master .amount");
let removeMonthly = document.querySelector(".monthly .circle");
let removeyearly = document.querySelector(".yearly .circle");

let planA = 199.99;
let planB = 249.99;
let planC = 399.99;

function init() {
  basicPlan.textContent = planA;
  profPlan.textContent = planB;
  masterPlan.textContent = planC;
}
removeMonthly.classList.add("hidden");
init();

turnSwitchMonthly.addEventListener("click", function () {
  //   turnSwitch.classList.toggle("active");
  removeMonthly.classList.remove("hidden");
  removeyearly.classList.add("hidden");
  basicPlan.textContent = 19.99;
  profPlan.textContent = 24.99;
  masterPlan.textContent = 39.99;
});

turnSwitchYearly.addEventListener("click", function () {
  removeyearly.classList.remove("hidden");
  removeMonthly.classList.add("hidden");
  init();
});
