var code = require('../main.js');

describe('Hello World', function(){
  it("says 'hello world!' when ran", function(){
    expect(code.outputHelloWorld()).toEqual("Hello, world!");

  });
});

// describe('Tax Calculator', function(){

//   it('should tax 10% on the first $10', function(){
//     expect(code.calculate(1)).toEqual(0.1);
//     expect(code.calculate(10)).toEqual(1);
//   });

//   it('should tax 7% on the second $10', function(){
//     expect(code.calculate(15)).toEqual(1.35);
//   });

// });

describe('Leap year', function(){

  it("returns 'true' when year is divisible by 4", function(){
    expect(code.leapYear(2000)).toEqual(true);
  });

  it("returns 'false' when not divisible by 4", function(){
    expect(code.leapYear(2001)).toEqual(false);
  });

  it("returns 'false' when year is divisible by 100, but not 400", function(){
    expect(code.leapYear(300)).toEqual(false);
    expect(code.leapYear(1700)).toEqual(false);
  });

});
