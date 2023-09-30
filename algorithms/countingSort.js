function CountingSort(){
    totalDelay = 0;


    for (var i = 0; i < barCountValue; i++){
        countingSortAnimation(inputArrays[i], inputHeight[i], "brown")
        countingSortAnimation(inputArrays[i], inputHeight[i], "#5131ce")
    }

    enableButtons();
}