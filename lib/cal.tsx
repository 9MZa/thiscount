export const DiscountCalculate = (total: number, discount: number) => {
  const getDiscount = (total * discount) / 100;
  const getTotal = total - getDiscount;

  const result = {
    normal: total,
    discount: getDiscount,
    total: getTotal,
  };

  return result;
};

export const CentimetersToInches = (cm: number, inch: number): number => {
  return 0;
};

export const IncVatCalculate = (num: number): number => {
  let vat = 7 / 100;
  let result = num + num * vat;
  return Number(result.toFixed(2));
};

export const ExcVatCalculate = (num: number): number => {
  let result = (num / 107) * 100;
  return Number(result.toFixed(2));
};
