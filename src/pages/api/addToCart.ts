import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body['data'];
  const token = req.body['token'];

  const { id_usuario, id_ingresso, classe, desconto } = data;

  try {
    const response = await fetch(`http://localhost:8080/v1/carrinho`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([
        {
          id_usuario,
          id_ingresso,
          classe,
          desconto,
        },
      ]),
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
