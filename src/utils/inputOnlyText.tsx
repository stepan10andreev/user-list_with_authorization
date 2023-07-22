export const inputOnlyText = (value: string) => {
  return value.replace(/[^a-zа-яё]/gi, '');
};
