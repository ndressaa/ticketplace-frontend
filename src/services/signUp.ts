export async function signUp(nome: any, email: any, senha: any, cpf: any) {
  const url = '/api/signup';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      email,
      senha,
      cpf,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
