var inputArrays = [];
var countArrays = [];
var outputArrays = [];
var inputHeight = []; 
var countHeight = []; 
var outputHeight = []; 

var arrayMargin; //represent space between bars

var inputArray = document.getElementById('inputArray');
var countArray = document.getElementById('countArray');
var outputArray = document.getElementById('outputArray');
var numText = document.getElementById('numText');

barRandomize.addEventListener("click", changeNumArrays);
barCount.addEventListener("input", changeNumArrays);

function changeNumArrays() {
    barCountValue = barCount.value;
    generateInputArray();
}

onload = () => {
    changeNumArrays()
    generateCountArray();
    generateOutputArray();
}

  
//Create the bars for the CountingSort
function generateInputArray() {
    inputArray.innerHTML = "";
  
    for (var i = 0; i < barCountValue; i++) {
        inputHeight[i] =
        Math.floor(Math.random() * 11) + 1;

        inputArrays[i] = document.createElement("div");
        inputArray.appendChild(inputArrays[i]);
  
      arrayMargin = 0.1;
      inputArrays[i].style =
        "margin-right:5px; width:100%; height: " + 
        (inputHeight[i] * 6) +
        "%; background-color:#5131ce;" +
        "align-self: flex-end;";
    }
}


//Create the bars for the Count
function generateCountArray() {
    countArray.innerHTML = "";
    numText.innerHTML = "";

    countHeight = Array(10).fill(0);
  
    for (var i = 1; i < 11; i++) {
        countHeight[i] = i * 10;

        countArrays[i] = document.createElement("div");
        countArray.appendChild(countArrays[i]);

        arrayMargin = 0.1;

        countArrays[i].style =
            "margin-right:5px; width:100%; height: " +
            countHeight[i] +
            "%; background-color:#717f8e;" +
            "align-self: flex-end;";

        // Create a span element for the text
        var textElement = document.createElement("div");
        textElement.innerHTML = i; // Set the text content
        numText.appendChild(textElement); // Append to countArrays[i]
        textElement.style = 
        "margin-left: auto;";
    }
}

//Create the bars for the output from the sorting
function generateOutputArray() {
    outputArray.innerHTML = "";
  
    for (var i = 0; i < barCountValue; i++) {
        outputHeight[i] =
        Math.floor(Math.random() * 11) + 1;

        outputArrays[i] = document.createElement("div");
        outputArray.appendChild(outputArrays[i]);
  
      arrayMargin = 0.1;
      outputArrays[i].style =
        "margin-right:5px; width:100%; height: " +
        (outputHeight[i] * 6) +
        "%; background-color: #0000ff;" +
        "align-self: flex-end;";
    }
}

//Counting Sort Animation
function countingSortAnimation(barContainer, height, color) {
    setTimeout(function () {
        barContainer.style =
          "margin-right:5px; width:100%; height:" +
          (height * 6) +
          "%; background-color:" +
          color +
          "; align-self: flex-end;";
      }
    , (totalDelay += delayTime));
  }