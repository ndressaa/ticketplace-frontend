const texts: { [key: string]: string } = {
  owned: 'Adquirido',
  onsale: 'Disponível para venda',
  exchange: 'Disponível para troca',
  offered: 'Ofertado para troca',
  generated: 'Gerado',
};

export const badgeText = (status?: string) => {
  if (!status) return texts['owned'];
  return texts[status as string];
};
