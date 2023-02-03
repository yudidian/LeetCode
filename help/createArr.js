exports.createArr =  function createArr(count){
  const originalArray=[];//原数组
  //给原数组originalArray赋值
  for (let i=0;i<count;i++){
    originalArray[i]=i+1;
  }
  originalArray.sort(function(){ return 0.5 - Math.random(); });
  return originalArray;
}
