//display variables
let userData = document.getElementById("user-data");
let result = document.getElementById("result");
//user-input variables
let heightValue = document.getElementById("height-value");
let weightValue = document.getElementById("weight-value");
let heightRange = document.getElementById("height-range");
let weightRange = document.getElementById("weight-range");
//result variables
let resultInWords = document.getElementById("result-in-words");
let resultInNumber = document.getElementById("result-in-number");
let finalResult = document.getElementById("final-result");

//calculate button 
let calculateBtn = document.getElementById("calculate");
//back btn
let goBack = document.getElementById("back");

//undefined variables
let hValue;
let wValue;
let personHeight;
let personWeight;
let wordColor;
let resultTitle;
let resultDiscription;

hValue = 0;
wValue = 0;
//this handles the event of Height [input range] and shows the value in heightValue
heightRange.addEventListener("input", function () {
  hValue = heightRange.value * 3; // max=> 100 but we only need upto 300
  document.body.style.backgroundPosition = hValue + "% " + hValue + "%"; //100% 100%
  heightValue.innerHTML = hValue;
});

//this handles the event of Weight [input range] and shows the value in weightValue
weightRange.addEventListener("input", function () {
  wValue = weightRange.value * 3; // max=> 100 but  we only need upto 300
  document.body.style.backgroundPosition = wValue + "% " + wValue + "%"; //100% 100%
  weightValue.innerHTML = wValue;
});

//function calculates the bmi
function calculateData(height, weight) {
  personHeight = height / 100; //changes the value from cm to meter
  personWeight = weight; // in kg (given)

  let bmi = (personWeight / personHeight ** 2).toFixed(1); // use bmi formula
  resultInNumber.innerHTML = bmi;

  if (bmi <= 18.5) {
    resultTitle = "Under Weight";
    wordColor = "red";
    resultDiscription = "You are in Under Weight range";
  } else if (bmi > 25.5 && bmi < 35) {
    resultTitle = "Over Weight";
    wordColor = "red";
    resultDiscription = "You are in Over Weight range";
  } else if (bmi >= 35) {
    resultTitle = "OBESE";
    wordColor = "red";
    resultDiscription =
      "You are in Obese(very overweight-lot of body fat) range";
  } else {
    resultTitle = "Normal";
    wordColor = "green";
    resultDiscription = "You are in Normal range";
  }
  finalResult.innerHTML = resultDiscription;
  resultInWords.innerHTML = resultTitle;
  resultInWords.style.color = wordColor;
}

function calculateClick() {
  calculateData(hValue, wValue); //run the calculate bmi function with the values from user
  userData.style.display = "none";
  result.style.display = "block";
}

calculateBtn.addEventListener("click", calculateClick);
goBack.addEventListener("click", function () {
  userData.style.display = "block";
  result.style.display = "none";
  reset();
});

function reset() {
  heightRange.value = 0;
  weightRange.value = 0;
  heightValue.innerHTML = 0;
  weightValue.innerHTML = 0;
  hValue = 0;
  wValue = 0;
}

reset();
