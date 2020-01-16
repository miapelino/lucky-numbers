import { getLuckyNumbers, isLucky, sumDigits, formatOutput } from './main.js';
import fs from 'fs';
import path from 'path';

describe('main', () => {
  describe('getLuckyNumbers', () => {
    it('returns lucky numbers between 100 and 200 inclusively', () => {
      expect(getLuckyNumbers(100, 200))
        .toStrictEqual( '11 lucky number(s) found:\n\    106,115,124,133,142,151,160,169,178,187,196');
    });

    it('returns lucky numbers between 62,400 and 62,500 inclusively', () => {
      expect(getLuckyNumbers(62400, 62500))
        .toStrictEqual('11 lucky number(s) found:\n\    62404,62413,62422,62431,62440,62449,62458,62467,62476,62485,62494');
    });

    it('returns lucky numbers between 999,999,999,900 and 1,000,000,000,000 inclusively', () => {
      expect(getLuckyNumbers(999999999900, 1000000000000))
        .toStrictEqual('11 lucky number(s) found:\n\    999999999907,999999999916,999999999925,999999999934,999999999943,999999999952,999999999961,999999999970,999999999979,999999999988,999999999997');
    });
  });

  describe('isLucky', () => {
    it('returns true when argument is 7', () => {
      expect(isLucky(7)).toBe(true);
    });

    it('returns true when digits add up to 7', () => {
      expect(isLucky(16)).toBe(true);
    });

    it('returns true when digits added up to 7 successively', () => {
      expect(isLucky(196)).toBe(true);
    });

    it('returns false when digits do not add up to 7', () => {
      expect(isLucky(17)).toBe(false);
    });
  });

  describe('sumDigits', () => {
    it('returns number passed for single digit argument', () => {
      expect(sumDigits(2)).toBe(2);
    });

    it('returns sum of digits for multiple digit argument', () => {
      expect(sumDigits(16)).toBe(7);
    });

    it('returns sum of digits for large multiple digit argument', () => {
      expect(sumDigits(1794)).toBe(21);
    });
  });

  describe('formatOutput', ()=> {
    it('formats lucky number output', () => {
      expect(formatOutput([7,16])).toBe('2 lucky number(s) found:\n\    7,16');
    });

    it('formats output when no lucky numbers found', () => {
      expect(formatOutput([])).toBe('No lucky numbers found.');
    });
  });

  describe('DOM', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    jest.dontMock('fs');

    beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
      jest.resetModules();
    });

    it('has an input for the first number', function () {
      expect(document.getElementById('input1')).toBeTruthy();
    });

    it('has an input for the second number', function () {
      expect(document.getElementById('input2')).toBeTruthy();
    });

    it('has an output to populate with calculated lucky numbers', function () {
      expect(document.getElementById('output')).toBeTruthy();
    });

    it('populates output when button is clicked', function () {
      document.getElementById('button').click();

      expect(document.getElementById('output').innerText).toBeDefined();
    });

    it('populates output with lucky number when button is clicked', function () {
      document.getElementById('input1').value = '0';
      document.getElementById('input2').value = '8';

      document.getElementById('button').click();

      expect(document.getElementById('output').innerText).toStrictEqual('1 lucky number(s) found:\n\    7');
    });

    it('populates output with no output message when no lucky numbers found', function () {
      document.getElementById('input1').value = '12';
      document.getElementById('input2').value = '14';

      document.getElementById('button').click();

      expect(document.getElementById('output').innerText).toStrictEqual('No lucky numbers found.');
    });
  });
});
