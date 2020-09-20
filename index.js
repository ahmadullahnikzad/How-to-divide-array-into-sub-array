//solution 1
function makeSubArray(arr,size){
  let newArray=[];
  let index=0;
  while(index<arr.length){
    newArray.push(arr.slice(index,index+size));
    index+=size;
  }
  return newArray;
}
makeSubArray([1,2,3,4,5,6,7,8,9],3);
//solutiion 2
function makeSubArray2(arr,size){
  let subArrays=[];
  let index=0;
  for(index;index<arr.length;index+=size){
subArrays.push(arr.slice(index,index+size));
  }
  return subArrays;
}
makeSubArray2([1,2,3,4,5,5,6,7,8,9,10],3);
//solutiion 3
function createSubArray3(arr,size){
  let newArr=[];
  while(arr.length){
    newArr.push(arr.splice(0,size))
  }
  return newArr;
}
createSubArray3([1,2,3,4,5,5,6,7,7,8,'a','b'],3);