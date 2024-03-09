interface ILogin {
  email: any;
  password: any;
}

interface ISignUp {
  nome: any;
  email: any;
  senha: any;
  cpf: any;
}

export async function getLogin({ email, password }: ILogin) {
  const encodedAuth = btoa(`${email}:${password}`);

  const res = await fetch('http://localhost:8080/v1/login', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedAuth}`,
    },
  });

  const result = await res.json();
  return result;
}

export async function signUp({ nome, email, senha, cpf }: ISignUp) {
  const res = await fetch('http://localhost:8080/v1/newUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
      },
    ]),
  });

  const result = await res.json();
  return result;
}
