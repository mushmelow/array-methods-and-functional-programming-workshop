function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  
  for (var i = 0 ; i <theArray.length; i++) {
    
  callback(theArray[i]);
  // console.log("the index",i)
  }
 
 
  
}



function map(mappingFunction, theArray) {
  
  // using mappingFunction (*2) all element in the array
  
  var mapping=[];
  
  theArray.forEach(function(el){
    
    mapping.push(mappingFunction(el));
    // console.log("the mapping is:",mapping);
  });
  return mapping;
}

function filter(predicate, theArray) {
  var oddNum=[];
  
  theArray.forEach(function(el){
    
    if(predicate(el) ) {
      
      oddNum.push(el);
    }
   
    
    console.log("returning num is:", oddNum);
    
  });
  
  return oddNum;

}

function every(predicate, theArray) {
  
  //for each cannot be break
  //the for loop can be break anytime with a return false with no variable
  
    if(theArray.length===0){
      return true;
    }
    else{
      
      for(var i=0; i<theArray.length;i++){
        
        if(!predicate(theArray[i])){
          return false;
        }
      }
      return true;
    }

}
 
  
  


function some(predicate, theArray) {
  
  if(theArray.length===0){
    return false
  }
  else{  
    
    for(var i=0; i<theArray.length;i++){
      if(predicate(theArray[i])){
        return true;
      }
    }
  }
  return false;
}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
