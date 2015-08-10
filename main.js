exports.outputHelloWorld = function(){
  return "Hello, world!";
};


// exports.calculate = function(){

// };

exports.leapYear = function(year){
  if(year % 4 ===0 && year % 100 === 0 && year % 400 === 0){
      return true;
    }

  else{
    return false;
  }
};





