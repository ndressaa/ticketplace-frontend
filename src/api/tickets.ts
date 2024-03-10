export async function getTicketById(id: string, token: string) {
  const res = await fetch(`http://localhost:8080/v1/ingressos/?id-eq=${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function getTicketsByEventId(id: string, token: string) {
  const res = await fetch(
    `http://localhost:8080/v1/ingressos/?id_evento-eq=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  return data;
}
