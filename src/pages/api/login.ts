import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body['email'];
  const password = req.body['password'];

  const encodedAuth = btoa(`${email}:${password}`);

  try {
    const response = await fetch('http://localhost:8080/v1/login', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encodedAuth}`,
      },
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
