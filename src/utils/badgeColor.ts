const colors: { [key: string]: string } = {
  owned: '#29E731',
  onsale: '#F0691D',
  exchange: '#F0691D',
  offered: '#F0691D',
  generated: '#29E731',
};

export const badgeColor = (status?: string) => {
  if (!status) return colors['owned'];
  return colors[status as string];
};
