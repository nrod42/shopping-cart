const currFormat = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number) => {
  return currFormat.format(number);
};

export default formatCurrency;
