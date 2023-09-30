function MergeSort() {
    totalDelay = 0;
  
    merge_partition(0, barCountValue - 1);
  
    enableButtons();
  }
  
  function merge_sort(start, mid, end) {
    var p = start,
      q = mid + 1;
  
    var Arr = [],
      k = 0;
  
    for (var i = start; i <= end; i++) {
      if (p > mid) {
        Arr[k++] = barHeight[q++];
        visualizationAnimate(bars[q - 1], barHeight[q - 1], "red"); 
      } else if (q > end) {
        Arr[k++] = barHeight[p++];
        visualizationAnimate(bars[p - 1], barHeight[p - 1], "red"); 
      } else if (barHeight[p] < barHeight[q]) {
        Arr[k++] = barHeight[p++];
        visualizationAnimate(bars[p - 1], barHeight[p - 1], "red"); 
      } else {
        Arr[k++] = barHeight[q++];
        visualizationAnimate(bars[q - 1], barHeight[q - 1], "red"); 
      }
    }
  
    for (var t = 0; t < k; t++) {
      barHeight[start++] = Arr[t];
      visualizationAnimate(bars[start - 1], barHeight[start - 1], "green"); 
    }
  }
  
  function merge_partition(start, end) {
    if (start < end) {
      var mid = Math.floor((start + end) / 2);
      visualizationAnimate(bars[mid], barHeight[mid], "yellow"); 
  
      merge_partition(start, mid);
      merge_partition(mid + 1, end);
      merge_sort(start, mid, end);
    }
  }
  