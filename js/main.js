export { getLuckyNumbers, isLucky, sumDigits, formatOutput };

window.submit = () => {
  let input1 = parseInt(document.getElementById('input1').value.replace(/,/g, ''));
  let input2 = parseInt(document.getElementById('input2').value.replace(/,/g, ''));
  let warn = document.getElementById('warn');
  let message = document.getElementById('output');

  if(validLength(input1, input2)) {
    warn.innerText = '';
    message.innerText = getLuckyNumbers(input1, input2);
  }
  else {
    warn.innerText = 'please choose positive, consecutive integers with a difference between 0 and 100,000';
    message.innerText = '';
  }
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
  if(luckyArray.length>0) {
    return luckyArray.toString().split(',').join('\n');
  }
  return 'No lucky numbers found.';
};

const validLength = (input1, input2) => {
  return input2-input1 < 100000 && input2-input1 >= 0 ;
};