export async function getAllEvents() {
  const res = await fetch('http://localhost:8080/v1/shows', {
    // method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // atualizar para pegar o token do login
      Authorization: 'Bearer ZzMxdHp5anhoazQuMTcwOTQ4MzU4NQ==',
    },
  });

  const data = await res.json();

  return data;
}

export async function getEventById(id: string) {
  const res = await fetch(`http://localhost:8080/v1/shows/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      // atualizar para pegar o token do login
      Authorization: 'Bearer ZzMxdHp5anhoazQuMTcwOTQ4MzU4NQ==',
    },
  });

  const data = await res.json();

  return data;
}
