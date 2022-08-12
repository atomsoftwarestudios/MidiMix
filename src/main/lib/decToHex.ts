export function decimalToHex(decimal: number, chars: number = 2) {
   return (decimal + Math.pow(16, chars)).toString(16).slice(-chars).toUpperCase();
}
