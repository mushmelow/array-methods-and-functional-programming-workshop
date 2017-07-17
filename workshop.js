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
    return false;
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
  
  
  
  for(var i=0;i<theArray.length;i++){
    
    if(theArray[i]===item){
      console.log(theArray[i]);
      return i;
    }
  }
  console.log("-1");
  return -1;
}

function findIndex(predicate, theArray) {
  
  for(var i=0; i<theArray.length; i++){
    
    if(predicate(theArray[i])){
      
      return i;
    }
    
  }
  return -1;
}

function first(n, theArray) {
  // arguments.length will return de number of argument that the function first has.
  if(arguments.length===1){
    return n[0];
  }
  else if(n>theArray.length){
    return theArray;
    
      
  }
  else if(n<0){
    return [];
    
  }
  else{
    var tab=[];
    for(var i=0; i<n;i++){
      tab.push(theArray[i]);
    }
    return tab;
  }

}

function last(n, theArray) {
  if(arguments.length===1){
    return n[n.length-1];
  }  
    
  else if(n>theArray.length){
    return theArray;
  
  }
  else if(n<0){
    return [];
    
  }
  else{
    var tab=[];
   for(var i=0; i<n;i++){
      tab.push(theArray[theArray.length-1-i]);
    }
    return tab.reverse();
  }
}

function pluck(property, arrayOfObjects) {
  var tab=[];
  arrayOfObjects.forEach(function(element) {
    tab.push(element[property]);
    
});
   return tab;
}

function flatten(theArray) {
  return theArray.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []); 

}

function negate1(predicate) {
  
 return function whatever(param){
      return !predicate(param);
      
 };
  

}

function negate2(predicate) {
   return function whatever(){
      return !predicate.apply(this, arguments);
    };
}

function compose1(fun1, fun2) {
      
  return function whatever(param){
    var result=fun2(param);
    return fun1(result);
    
  }

}

function compose2(arrOfFuncs) {
   
   
   return function whatever(param){
        var result= param;
   
     for(var i=arrOfFuncs.length - 1; i >= 0; i--){
       result= arrOfFuncs[i](result);
     }
     
     return result;
   }

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
