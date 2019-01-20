const getTotal = (accounts, currency, rate) => rate * accounts
  .filter(it => it.currency === currency)
  .reduce((acc, it) => it.value + acc, 0)

export const getTotalRUB = accounts => getTotal(accounts, 'RUB', 1)
export const getTotalUSD = (accounts, rate) => getTotal(accounts, 'USD', rate)
export const getTotalEUR = (accounts, rate) => getTotal(accounts, 'EUR', rate)

export const formatNum = num => num
  .toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

export const getPercentage = (num, total) => {
  const result = num / total * 100
  if (Number.isNaN(result)) {
    return 0
  }
  return result
}
