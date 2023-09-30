function CountingSort(){
    totalDelay = 0;

    for (var i = 0; i < barCountValue; i++){
        //STEP 1
        //initial go through of the input Array
        countingSortAnimation(inputArrays[i], inputHeight[i], "brown")
        // Increment countHeight based on inputHeight
        countHeight[inputHeight[i]] += 1; 
        countingSortAnimation(countArrays[inputHeight[i]], countHeight[inputHeight[i]], "#717f8e");

        countingSortAnimation(inputArrays[i], inputHeight[i], "#5131ce")
    }

    for (var j = 1; j < countHeight.length; j++){
            //STEP 2
            countingSortAnimation(countArrays[j-1], countHeight[j-1], "red");
            countingSortAnimation(countArrays[j], countHeight[j], "green");
            countHeight[j] += countHeight[j - 1]; 
            countingSortAnimation(countArrays[j-1], countHeight[j-1], "#717f8e");
            countingSortAnimation(countArrays[j], countHeight[j], "red");
            countingSortAnimation(countArrays[j], countHeight[j], "#717f8e");
    }

    enableButtons();
}