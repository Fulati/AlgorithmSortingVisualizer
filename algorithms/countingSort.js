function CountingSort(){
    totalDelay = 0;

    for (var i = 0; i < barCountValue; i++){
        //initial go through of the input Array
        countingSortAnimation(inputArrays[i], inputHeight[i], "brown")
        // Increment countHeight based on inputHeight
        countHeight[inputHeight[i]] += 1; 
        countingSortAnimation(countArrays[inputHeight[i]], countHeight[inputHeight[i]], "#717f8e");

        countingSortAnimation(inputArrays[i], inputHeight[i], "#5131ce")


        




    }

    enableButtons();
}