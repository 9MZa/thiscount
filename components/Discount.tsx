function DiscountCalculate(total: number, discount: number) {
  const getDiscount = (total * discount) / 100;
  const getTotal = total - getDiscount;

  const result = {
    total: total,
    discount: getDiscount,
    sumTotal: getTotal,
  };

  return result;
}

export default DiscountCalculate;
