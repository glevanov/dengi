const getTotal = (accounts, currency, rate) => rate * accounts
  .filter(it => it.currency.code === currency)
  .reduce((acc, it) => it.value + acc, 0);

export const getTotalRUB = accounts => getTotal(accounts, 'RUB', 1);
export const getTotalUSD = (accounts, rate) => getTotal(accounts, 'USD', rate);
export const getTotalEUR = (accounts, rate) => getTotal(accounts, 'EUR', rate);

export const formatNum = num => num.toLocaleString();
