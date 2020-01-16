import { getRange, isLucky, getLuckyNumbers } from './main.js';
import fs from 'fs';
import path from 'path';

describe('lucky number calculator', () => {
  describe('getRange', () => {
    it('returns all numbers between inputs, inclusively, as a string array', () => {
      let result = getRange(11, 10);
      expect(result).toStrictEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
  });

  describe('isLucky', () => {
    it('returns true when argument is 7', () => {
      let result = isLucky('7');
      expect(result).toBe(true);
    });

    it('returns true when digits add up to 7', () => {
      let result = isLucky('16');
      expect(result).toBe(true);
    });

    it('returns true when digits added up to 7 successively', () => {
      let result = isLucky('196');
      expect(result).toBe(true);
    });

    it('returns false when digits do not add up to 7', () => {
      let result = isLucky('17');
      expect(result).toBe(false);
    });
  });

  describe('getLuckyNumbers test cases', () => {
    it('returns lucky numbers between 100 and 200 inclusively', () => {
      expect(getLuckyNumbers(100, 200))
        .toStrictEqual('106,115,124,133,142,151,160,169,178,187,196');
    });

    it('returns lucky numbers between 62,400 and 62,500 inclusively', () => {
      expect(getLuckyNumbers(62400, 62500))
        .toStrictEqual('62404,62413,62422,62431,62440,62449,62458,62467,62476,62485,62494');
    });

    it('returns lucky numbers between 999,999,999,900 and 1,000,000,000,000 inclusively', () => {
      expect(getLuckyNumbers(999999999900, 1000000000000))
        .toStrictEqual('999999999907,999999999916,999999999925,999999999934,999999999943,999999999952,999999999961,999999999970,999999999979,999999999988,999999999997');
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
      let button = document.getElementById('button');
      button.click();
      let output = document.getElementById('output');
      expect(output.innerText).toStrictEqual('7');
    });
  });
});
