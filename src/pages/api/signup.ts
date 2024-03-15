import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nome = req.body['nome'];
  const email = req.body['email'];
  const senha = req.body['senha'];
  const cpf = req.body['cpf'];

  try {
    const response = await fetch('http://localhost:8080/v1/newUser', {
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

    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
