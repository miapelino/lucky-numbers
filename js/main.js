export { getLuckyNumbers, isLucky, sumDigits, formatOutput };

window.submit = () => {
  let input1 = document.getElementById('input1');
  let input2 = document.getElementById('input2');
  document.getElementById("output").innerText
    = getLuckyNumbers(
      parseInt(input1.value.replace(/,/g, '')),
      parseInt(input2.value.replace(/,/g, '')));
};

const getLuckyNumbers = (num1, num2) => {
  let luckyArray = [];
    for(let i = num1; i <= num2; i++){
       isLucky(i) && luckyArray.push(i);
    }
  return formatOutput(luckyArray);
};

const isLucky = (num) => {
  while(num > 9) {
    num = sumDigits(num);
  }
  return num===7;
};

const sumDigits = (num) => {
  let sum = 0;
  while (num !== 0) {
    sum = sum + num % 10;
    num = Math.floor(num/10);
  }
  return sum;
};

const formatOutput = (luckyArray) => {
  if(luckyArray.length>0){
    return `${luckyArray.length} lucky number(s) found:
    ${luckyArray.toString()}`;
  }
  return 'No lucky numbers found.';
};