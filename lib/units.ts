// Conversion factors
export const POUNDS_TO_KG = 0.45359237;
export const KG_TO_POUNDS = 2.20462262185;
export const CM_TO_INCHES = 0.393701;
export const INCHES_TO_CM = 2.54;

export function convertWeight(value: number, from: 'kg' | 'lbs'): number {
  return from === 'kg' ? value : value * POUNDS_TO_KG;
}

export function convertHeight(value: number, from: 'cm' | 'in'): number {
  return from === 'cm' ? value : value * INCHES_TO_CM;
}

export const volumeUnits = {
  cup: {
    ml: 236.588,
    tbsp: 16,
  },
  tbsp: {
    ml: 14.7868,
    tsp: 3,
  },
  tsp: {
    ml: 4.92892,
  },
};

export type VolumeUnit = 'cup' | 'tbsp' | 'tsp' | 'ml' | 'g';

export function convertVolume(value: number, from: VolumeUnit, to: VolumeUnit, density: number = 1): number {
  if (from === to) return value;
  
  // Convert everything to ml first
  let mlValue = value;
  if (from === 'g') {
    mlValue = value / density;
  } else if (from !== 'ml') {
    mlValue = value * volumeUnits[from as keyof typeof volumeUnits].ml;
  }

  // Convert ml to target unit
  if (to === 'g') {
    return mlValue * density;
  } else if (to === 'ml') {
    return mlValue;
  } else {
    return mlValue / volumeUnits[to as keyof typeof volumeUnits].ml;
  }
}