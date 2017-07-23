let displayArray = [];
let displayResult = [];
let nums = document.getElementsByClassName("num");
let display = document.getElementById("display");
let ops = document.getElementsByClassName("op")
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");

  for (var num of nums) {
    num.addEventListener("click", function (){
    displayArray += this.value;
    console.log(this.value);
    display.value = displayArray;
  })};

  for (var op of ops){
    op.addEventListener("click", function (){
    displayArray += this.value;
    display.value = displayArray;
  })};

  equals.addEventListener("click", function (){
    displayResult = eval(displayArray);
    display.value = displayResult;
  })

  clear.addEventListener("click", function (){
    display.value = [];
    displayArray = [];
  })
