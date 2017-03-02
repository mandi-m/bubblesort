'use strict';

function bubbleSort(arr){
  var swap = true;
  while(swap){
    swap = false;
    for(var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        swap = swapElements(arr, i);
        }
     }
    }
  return arr;
}


function swapElements(arr, i){
  var temp = arr[i];
  arr[i]=arr[i+1];
  arr[i+1] = temp;
  return true;
}


