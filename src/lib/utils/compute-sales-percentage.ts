export const computeSalesPercentage = (
  currentPrice: number,
  discountedPrice: number,
) => {
  const lessPrice = currentPrice - discountedPrice;

  const percentage = (lessPrice / currentPrice) * 100;

  return Number(percentage.toFixed(2));
};
