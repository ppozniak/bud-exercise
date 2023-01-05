export const formatCurrency = (amount: number, currency: string) => {
  const currencyFormatter = new Intl.NumberFormat("en-gb", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  });

  return currencyFormatter.format(amount);
};
