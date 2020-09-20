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
