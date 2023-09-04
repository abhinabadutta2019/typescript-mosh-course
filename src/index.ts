function calculateTax(income: number): number {
  //   return 3;

  //
  if (income < 50) {
    return income * 2;
  }
  return income * 1.5;
}

console.log(calculateTax(100));
