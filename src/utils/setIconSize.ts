const sizes: { [key: string]: string } = {
  small: '20',
  medium: '30',
  big: '35',
};

export const setIconSize = (size?: string) => {
  if (!size) return sizes['big'];
  return sizes[size as string] || size;
};
