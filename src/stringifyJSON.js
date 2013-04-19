// this is what you would do if you liked things to be easy:
//console.log(JSON.stringify(obj)

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(_.isString(obj)){
	  return '"'+obj+'"';
  }
  if(Array.isArray(obj)){
	  if(obj.length == 0){
		  return '[]';
	  }
	  var arrayStrings = '['
	  _.each(obj, function(element){
		  arrayStrings += stringifyJSON(element) + ',';
		  
	  });
	  arrayStrings += ']';
	  arrayStrings = arrayStrings.replace(/,]/, ']');
	  return arrayStrings;
  }
  if(obj instanceof Object){
	  if(_.isEmpty(obj)){
		  return '{'+'}';
	  }if(obj[0] instanceof Object){
		  console.log(obj[0]);
	  }
	  var objectStrings = '{'
	  for(i in obj){
	    if(i == "functions"){
		    return '{'+'}';
	    }
	    objectStrings += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) +',';
	  }
	  objectStrings += '}';
	  objectStrings = objectStrings.replace(/,}/, '}');
	  return objectStrings;
  }
  return ''+obj;
}

  //for(x in obj){
	  //console.log(x);
  //}
//};
