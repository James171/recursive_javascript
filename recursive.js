x = prompt("Pick a starting number: ");

y = prompt("Pick an ending number: ");

while(x > y){
y = prompt("Please pick a larger number: ");
}

function rangeOfNumbers(startNum, endNum) {
  let n = endNum - startNum;
  if(1 > n){
    return [startNum];
  }
  else{
   const countArray = rangeOfNumbers(startNum, endNum - 1);
   countArray.push(endNum);
   return countArray;
  }
    
}
  
  
answer = rangeOfNumbers(x, y);


document.getElementById('output').innerHTML = answer;