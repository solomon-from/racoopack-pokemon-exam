export function formatNumberWithLeadingZeros(number: { toString: () => string; }) {
    return `#${number.toString().padStart(4, '0')}`;
  }

export  const capitalizeFirstLetter = (string: string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  