import {
  formatNum, getTotalRUB, getTotalEUR, getTotalUSD,
} from '../src/currency';

const rateEUR = 80;
const rateUSD = 65;

const accounts = [
  {
    currency: {
      code: 'RUB',
      text: '₽',
    },
    custodian: 'Тиньков',
    type: 'Вклад',
    value: 1400000,
  },
  {
    currency: {
      code: 'RUB',
      text: '₽',
    },
    custodian: 'Альфа',
    type: 'Вклад',
    value: 1034102.45,
  },
  {
    currency: {
      code: 'USD',
      text: '$',
    },
    custodian: 'Альфа',
    type: 'ETF',
    value: 10223.11,
  },
  {
    currency: {
      code: 'USD',
      text: '$',
    },
    custodian: 'Тиньков',
    type: 'Вклад',
    value: 1031.07,
  },
  {
    currency: {
      code: 'EUR',
      text: '€',
    },
    custodian: 'Открытие',
    type: 'Вклад',
    value: 2030.81,
  },
  {
    currency: {
      code: 'EUR',
      text: '€',
    },
    custodian: 'МКБ',
    type: 'Вклад',
    value: 304.37,
  },
];

test('formatNum returns a string', () => {
  expect(typeof formatNum(100)).toBe('string');
});

test('getTotal calculates correct total', () => {
  expect(getTotalRUB(accounts)).toBe(2434102.45);
  expect(getTotalUSD(accounts, rateUSD)).toBe(731521.7000000001);
  expect(getTotalEUR(accounts, rateEUR)).toBe(186814.4);
});
