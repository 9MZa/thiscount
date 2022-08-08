export const DiscountCalculate = (total: number, discount: number) => {
  const getDiscount = (total * discount) / 100;
  const getTotal = total - getDiscount;

  const result = {
    total: total,
    discount: getDiscount,
    sumTotal: getTotal,
  };

  return result;
};

export const CentimetersToInches = (cm: number, inch: number): number => {
  return 0;
};

export const VatCalculate = (num: number): number => {
  let vat = 7 / 100;
  let result = num + num * vat;
  return Number(result.toFixed(2));
};
