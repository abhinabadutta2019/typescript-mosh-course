function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    //
    return weight * 2;
  } else return parseInt(weight);
}

//
// kgToLbs(10);

console.log(kgToLbs("11"));
