export { getLuckyNumbers, getRange, isLucky };

window.submit = () => {
  let input1 = document.getElementById('input1');
  let input2 = document.getElementById('input2');
  document.getElementById("output").innerText
    = getLuckyNumbers(
      parseInt(input1.value.replace(/,/g, '')),
      parseInt(input2.value.replace(/,/g, '')));
};

const getLuckyNumbers = (num1, num2) => {
  const rangeSize = num2-num1+1;
  let range = getRange(rangeSize, num1);
  return formatOutput(range.filter(num => isLucky(num) && num));
};

const getRange = (size, lowerBound) => {
  return Array.from({ length: size },  (x,i) => i + lowerBound);
};

const isLucky = (num) => {
  let numArray = Array.from(num.toString()).map(Number);
  let sum = numArray.reduce((a,b) => a + b);
  if((sum+'').length > 1){
    return isLucky(sum);
  }
  return sum===7;
};

const formatOutput = (luckyNumbers) => {
  //let input1 = document.getElementById('input1');
  //let input2 = document.getElementById('input2');
  // if(luckyNumbers.length>0){
  //   return `WOW! You have ${luckyNumbers.length} Lucky Numbers!
  //   They are: ${luckyNumbers.toString()}.`;
  // }
  // return `Oh no. There are no lucky numbers between ${input1.value} and ${input2.value}.
  // What were you thinking?`
  return luckyNumbers.toString();
};
