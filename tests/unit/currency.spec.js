import {
  formatNum, getTotalRUB, getTotalEUR, getTotalUSD, getPercentage,
} from '@/js/currency';

const rateEUR = 80;
const rateUSD = 65;

const accounts = [
  {
    currency: 'RUB',
    custodian: 'Тиньков',
    type: 'Вклад',
    value: 1400000,
  },
  {
    currency: 'RUB',
    custodian: 'Альфа',
    type: 'Вклад',
    value: 1034102.45,
  },
  {
    currency: 'USD',
    custodian: 'Альфа',
    type: 'ETF',
    value: 10223.11,
  },
  {
    currency: 'USD',
    custodian: 'Тиньков',
    type: 'Вклад',
    value: 1031.07,
  },
  {
    currency: 'EUR',
    custodian: 'Открытие',
    type: 'Вклад',
    value: 2030.81,
  },
  {
    currency: 'EUR',
    custodian: 'МКБ',
    type: 'Вклад',
    value: 304.37,
  },
];

describe('formatNum', () => {
  it('returns a string', () => {
    expect(typeof formatNum(100)).toBe('string');
  });
});

describe('getTotal', () => {
  it('calculates correct total', () => {
    expect(getTotalRUB(accounts)).toBe(2434102.45);
    expect(getTotalUSD(accounts, rateUSD)).toBe(731521.7000000001);
    expect(getTotalEUR(accounts, rateEUR)).toBe(186814.4);
  });
});

describe('getPercentage', () => {
  it('calculates correctly', () => {
    expect(getPercentage(100, 100)).toBe(100);
    expect(getPercentage(150, 300)).toBe(50);
    expect(getPercentage(60, 200)).toBe(30);
  });

  it('handles corner cases', () => {
    expect(getPercentage(0, 0)).toBe(0);
    expect(getPercentage(12345, 0)).toBe(0);
    expect(getPercentage(0, 12345)).toBe(0);
  });
});
