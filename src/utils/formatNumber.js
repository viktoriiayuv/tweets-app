export const formatNumber = (number) => {
  const stringNumber = number.toString();
  if (stringNumber.length > 3) {
    const wholePart = stringNumber.slice(0, -3);
    const partAfterComma = stringNumber.slice(-3);
    return `${wholePart},${partAfterComma}`;
  }
  return number;
};
