import { getFormattedNum, getTotalInRub } from 'src/currency.js';

const accounts = [
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Тиньков',
          type: 'Вклад',
          value: 1400000
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа',
          type: 'Вклад',
          value: 1034102.45
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа-Директ',
          type: 'ETF',
          value: 2201823.13
        },
        {
          currency: {
            code: 'RUB',
            text: '₽'
          },
          custodian: 'Альфа',
          type: 'ПИФ',
          value: 876403.35
        },
        {
          currency: {
            code: 'USD',
            text: '$'
          },
          custodian: 'Альфа',
          type: 'ETF',
          value: 10223.11
        },
        {
          currency: {
            code: 'USD',
            text: '$'
          },
          custodian: 'Тиньков',
          type: 'Вклад',
          value: 1031.07
        }
      ];


test("getFormattedNum returns a string", () => {
  expect(typeof getFormattedNum(100)).toBe('string');
});

test("getTotalInRub calculates correct total", () => {
  
});
