interface ILogin {
  email: any;
  password: any;
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

  console.log('result: ', result);

  return result;
}
