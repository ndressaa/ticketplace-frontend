export const ticketType = (type: string) => {
  return type === 'standard'
    ? 'Padrão'
    : type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};
