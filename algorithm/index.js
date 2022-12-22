// this is the best program ever written 
//woah looks like removing (not adding) a row or column ~~to~~ (from?) a **square** halves the possible routes 
function evaluateAll(maxRows, maxCols){
  //Assuming square grid, i.e. maxRows = maxCols;
  // let current = evaluateRoute(1, 1, 0, 0, 0, 0, 0);
  let current = 2;
  let past = [current];
  if(maxRows==1) return current;
  // console.log(evaluateRoute(2, 2, 1, 1, 0, 0, 0) * results[results.length-1]);
  // console.log(evaluateRoute(2, 2, 0, 1, 0, 1, 0));
  // console.log(evaluateRoute(2, 2, 1, 0, 0, 0, 1));

  for(var i = 2; i <= maxRows; i++){
    let count = 0;
    count += (2*current); //corner block corner point
    count += current/2; //test;
    count += current/2; //test
    for(var j = 0; j < 2; j++){
      for(var k = 0; k < i-1; k++){
        
      }
      //use previous data to calculate, if (i-10)xi, use (i-10)x(i-10),
    }
    current = count;
    past.push(current);
  }
  //currently missing: number of ways to get to the side/corner block;
  return current;
}

function evaluateRoute(rows, cols, i, j, count, y, x){
  if(!y && i < rows){
    count += evaluateRoute(rows, cols, i+1, j, 0, (y == 0? y: y-1), (x == 0? x: x-1));
  } 
  if(!x && j < cols){
    count += evaluateRoute(rows, cols, i, j+1, 0, (y == 0? y: y-1), (x == 0? x: x-1));
  }
  if(i == rows && j == cols){
    return 1;
  }
    return count;
}


function debugRoute(rows, cols, i, j, count, draw, first){
  if(i < rows){
    if(draw) drawNodes(); 
    count += debugRoute(rows, cols, i+1, j, 0, (i+1 < rows && j < cols));
  } 
  if(j < cols){
    if(first) drawNodes();
    count += debugRoute(rows, cols, i, j+1, 0, (i < rows && j+1 < cols));
  }
  if(i == rows && j == cols){
    return 1;
  }
    return count;
}



// console.log(evaluateAll(2,2));
// console.log(evaluateAll(1, 10, 0, 0, 0, 0, 0, [], [], true));
//console.log(evaluateRoute(2, 3, 0, 0, 0, 0, 0), evaluateRoute(1,3, 0, 0, 0, 0, 0));

// for(var i = 2; i < 7; i++){
//   console.log(evaluateRoute(i, i, 0, 0, 0, 0), evaluateRoute(i+1, i, 0, 0, 0, 0))
// }