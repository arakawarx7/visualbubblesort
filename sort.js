
  var bubbleSortPageDiv = document.getElementById('bubbleSortPageDiv');
  var bubbleSortContainer = document.createElement('div');
  bubbleSortContainer.style.width = "620px";
  bubbleSortContainer.style.height = "200px";
  bubbleSortContainer.style.backgroundColor = 'lightblue';
  var arrayIndex = [2,4,6,8,1,9,3,7,5,10 ];
  var canGo = true;

  // for (var i=0, t=10; i<t; i++) {
  //   arrayIndex.push(Math.round(Math.random() * t));
  // }


  for(var i = 0; i < 10; i++){
    var arrayDiv = document.createElement('div');
    arrayDiv.className = "arrayDiv";
    arrayDiv.id = i;
    // arrayDiv.innerHTML = arrayIndex[i];


    bubbleSortContainer.appendChild(arrayDiv);
  }

    bubbleSortPageDiv.appendChild(bubbleSortContainer);


    /// step function will loop through each div and set the div height to matching array index value.
  function step(array){
    for(var i = 0; i < 10; i++){
    var arrayDiv = document.getElementById(i);
    arrayDiv.style.height = (array[i]*20) +"px";
    // arrayDiv.innerHTML = arrayIndex[i];

    }
  }

function move(){

  /// run set interval with delay of 1000ms & in each set will call step function and call bubble sort once.
  setInterval(()=>{
    if(canGo){
      bubbleSort2(arrayIndex);
      step(arrayIndex);
    }

  },1000);



  function bubbleSort2(array){ //<-- parameter to test in code
    var storeArray =[];
    var counter = 0;
    var swaps = 0;
    console.log("array",array);

    // while(canGo === true){
    //   canGo = false;

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
    // }

    console.log("it takes " + counter +" counter to sort.");
    console.log("swaps",swaps);
    return array;
  };
  bubbleSort2(2,4,6,8,4);


}
