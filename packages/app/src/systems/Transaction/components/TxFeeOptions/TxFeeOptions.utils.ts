import { type BN, DEFAULT_DECIMAL_UNITS } from 'fuels';

export const DECIMAL_UNITS = DEFAULT_DECIMAL_UNITS;

export const formatTip = (tip: BN) => {
  if (tip.isZero()) {
    return '0';
  }

  return tip.format({
    units: DECIMAL_UNITS,
    precision: DECIMAL_UNITS,
  });
};
