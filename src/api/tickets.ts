export async function getTicketById(id: string) {
  const res = await fetch(`http://localhost:8080/v1/ingressos/?id-eq=${id}`, {
    headers: {
      'Content-Type': 'application/json',
      // atualizar para pegar o token do login
      Authorization: 'Bearer cDIxMnBvaW5teGEuMTcxMDAzMTA5Ng==',
    },
  });

  const data = await res.json();
  return data;
}

export async function getTicketsByEventId(id: string) {
  const res = await fetch(
    `http://localhost:8080/v1/ingressos/?id_evento-eq=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        // atualizar para pegar o token do login
        Authorization: 'Bearer cDIxMnBvaW5teGEuMTcxMDAzMTA5Ng==',
      },
    }
  );

  const data = await res.json();
  return data;
}
