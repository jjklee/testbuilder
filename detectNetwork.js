// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = Number(cardNumber.slice(0, 2));
  var prefix3 = Number(cardNumber.slice(0, 3));
  var prefix4 = Number(cardNumber.slice(0, 4));
  var prefix6 = Number(cardNumber.slice(0, 6));
  var chinaUnionPay = [624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288];
  var switchNums = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];

  if(cardNumber.length === 14 && (prefix === 38 || prefix === 39)) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (prefix === 34 || prefix === 37)) {
  	return 'American Express';
  } else if (cardNumber.length === 16 && (prefix >= 51 && prefix <= 55)) {
  	return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (prefix === 65 || prefix4 === 6011 || (prefix3 >= 644 && prefix3 <=649))) {
  	return 'Discover';
  } else if ((cardNumber.length >= 12 && cardNumber.length <=19) && (prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304)) {
  	return 'Maestro';
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (switchNums.includes(prefix4) || switchNums.includes(prefix6))) {
  	return "Switch";
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.startsWith('4')) {
  	return 'Visa';
  } else if ((cardNumber.length >=16 && cardNumber.length <= 19) && (chinaUnionPay.includes(prefix3) || chinaUnionPay.includes(prefix4) || prefix6 >= 622126 && prefix6 <= 622925)) {
  	return "China UnionPay";
  } 
};