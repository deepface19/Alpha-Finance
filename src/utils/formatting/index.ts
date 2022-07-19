export const formatBalance = (
  balance: number | string,
  decimals = 6,
): string => {
  if (!balance) return `${0}`;

  const dividedValue = Number(balance) / (1000 * 1000);

  return dividedValue.toFixed(decimals);
};