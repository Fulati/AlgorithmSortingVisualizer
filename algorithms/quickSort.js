function Quick() {
  totalDelay = 0;

  quick_sort(0, barCountValue - 1);

  enableButtons();
}

function quick_partition(start, end) {
  var i = start + 1;
  var piv = barHeight[start]; //make the first element as pivot element.
  visualizationAnimate(bars[start], barHeight[start], "yellow");

  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (barHeight[j] < piv) {
      visualizationAnimate(bars[j], barHeight[j], "yellow");

      visualizationAnimate(bars[i], barHeight[i], "red");
      visualizationAnimate(bars[j], barHeight[j], "red");

      var temp = barHeight[i];
      barHeight[i] = barHeight[j];
      barHeight[j] = temp;

      visualizationAnimate(bars[i], barHeight[i], "red");
      visualizationAnimate(bars[j], barHeight[j], "red");

      visualizationAnimate(bars[i], barHeight[i], "#5131ce");
      visualizationAnimate(bars[j], barHeight[j], "#5131ce");

      i += 1;
    }
  }
  visualizationAnimate(bars[start], barHeight[start], "red");
  visualizationAnimate(bars[i - 1], barHeight[i - 1], "red");

  var temp = barHeight[start]; //put the pivot element in its proper place.
  barHeight[start] = barHeight[i - 1];
  barHeight[i - 1] = temp;

  visualizationAnimate(bars[start], barHeight[start], "red");
  visualizationAnimate(bars[i - 1], barHeight[i - 1], "red");

  for (var t = start; t <= i; t++) {
    visualizationAnimate(bars[t], barHeight[t], "green");
  }

  return i - 1; //return the position of the pivot
}

function quick_sort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
    quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
  }
}
