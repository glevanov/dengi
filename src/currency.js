export const getTotalInRub = (accounts, currency, rate = 1) => {
  const result = accounts
    .filter(it => it.currency.code === currency)
    .reduce((acc, it) => it.value + acc, 0);
  const total = (currency === 'RUB') ? result : result * rate;
  return total;
};

export const getFormattedNum = (num) => num.toLocaleString();
