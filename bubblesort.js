
function bubbleSort2(array){ //<-- parameter to test in code
  var storeArray =[];
  var counter = 0;
  var swaps = 0;
  var canGo = true;
  console.log("array",array);

  while(canGo === true){
    canGo = false;

    for(var i = 0; i <array.length; i++){

      if(array[i] > array[i+1]){

        storeArray.push(array[i]);
        array.splice(i,1);
        array.splice(i+1,0,storeArray[0]);
        storeArray.pop();

        canGo = true;
        swaps++;
      }
    }
    counter++;
  }

  console.log("it takes " + counter +" counter to sort.");
  console.log("swaps",swaps);
  return array;
};





