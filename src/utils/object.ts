export const hasNonNullProperty = (obj: any): boolean => {
  if (typeof obj !== 'object') return false;

  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      return true;
    }
  }
  return false;
};

export const removeEmptyField = <T>(obj: T): T => {
  const resultObj = { ...obj };
  for (const key in resultObj) {
    if (resultObj[key] === null || resultObj[key] === undefined) {
      delete resultObj[key];
    }
  }

  return resultObj;
};
