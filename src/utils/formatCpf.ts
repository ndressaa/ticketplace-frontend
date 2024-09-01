export function formatCpf(cpf: string = '00000000000') {
  const part1 = cpf.slice(0, 3);
  const part2 = cpf.slice(9, 11);

  return `${part1}.***.***-${part2}`;
}
