/**
 *
 * Generates a function for easily getting the label from a prisma enum map.
 *
 * @template T
 * @param {Record<T, string>} map
 * @return {*}
 */
export const generateDisplayEnumFunc = <T extends string>(
  displayMap: Record<T, string>
) => {
  return (key: string) => {
    return displayMap[key as T] || key;
  };
};

export interface SelectOption<T> {
  value: T;
  label: string;
}

export const createEnumOptions = <T extends string>(
  displayMap: Record<T, string>
) => {
  return Object.entries(displayMap).map(([value, label]) => ({
    value,
    label,
  })) as SelectOption<T>[];
};
