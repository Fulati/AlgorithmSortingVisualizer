function CountingSort(){
    totalDelay = 0;

    
    // STEP 1: Count occurrences of each element in input array
    for (var i = 0; i < countSortSizeValue; i++){
        // Initial go through of the input array
        countingSortAnimation(inputArrays[i], inputHeight[i], "brown");

        // Increment countHeight based on inputHeight
        countHeight[inputHeight[i]] += 1; 

        // Animate the changes in the count array
        countingSortAnimation(countArrays[inputHeight[i]], countHeight[inputHeight[i]], "#717f8e");

        // Reset color for the input array
        countingSortAnimation(inputArrays[i], inputHeight[i], "#5131ce");
    }


    // STEP 2: Accumulate counts to get the final positions
    for (var j = 1; j < countHeight.length; j++){
        // Animate the change in the count array during accumulation
        countingSortAnimation(countArrays[j-1], countHeight[j-1], "brown");

        // Accumulate counts to get the final position
        countHeight[j] += countHeight[j - 1]; 

        // Animate the changes in the count array during accumulation
        countingSortAnimation(countArrays[j], countHeight[j], "green");

        // Reset color for the count array
        countingSortAnimation(countArrays[j-1], countHeight[j-1], "#717f8e");
        countingSortAnimation(countArrays[j], countHeight[j], "#717f8e");
    }


    // STEP 3: Build the sorted output array
    for (var k = countSortSizeValue - 1; k >= 0; k--) {
        // Initial go through of the input array
        countingSortAnimation(inputArrays[k], inputHeight[k], "brown");

        // Decrement countHeight for the corresponding inputHeight
        countHeight[inputHeight[k]]--;

        // Update the outputHeight based on the countHeight and inputHeight
        var outputIndex = countHeight[inputHeight[k]];
        outputHeight[outputIndex] = inputHeight[k];

        // Animate the changes in the count and output arrays
        countingSortAnimation(countArrays[inputHeight[k]], countHeight[inputHeight[k]], "brown");
        countingSortAnimation(outputArrays[outputIndex], outputHeight[outputIndex], "green");

        // Reset colors for the input, count, and output arrays
        countingSortAnimation(inputArrays[k], inputHeight[k], "#5131ce");
        countingSortAnimation(countArrays[inputHeight[k]], countHeight[inputHeight[k]], "#717f8e");
        countingSortAnimation(outputArrays[outputIndex], outputHeight[outputIndex], "#0000ff");
    }   

    // Enable buttons after the sorting is complete
    enableButtons();
}