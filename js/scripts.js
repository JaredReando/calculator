var add = function(number1, number2){
return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

$(function() {
  $('form#add').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#add1').val());
    var number2 = parseInt($('#add2').val());
    $('.output').text(add(number1,number2));
  });

  $('form#mult').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#mult1').val());
    var number2 = parseInt($('#mult2').val());
    $('.output').text(multiply(number1,number2));
  });
});
