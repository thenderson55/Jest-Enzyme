function hiInTheMiddle(elementsOfArray) {
  if(elementsOfArray.length % 2 === 1) {
    let mid = Math.floor(elementsOfArray.length / 2);
    console.log('f', mid)
    elementsOfArray.splice(mid,1,"hi");
  } else {
    return elementsOfArray;
  }
  return elementsOfArray
 }

 console.log(hiInTheMiddle([1,2,3,4,5]))