export async function getAllEvents(token: string) {
  const res = await fetch('http://localhost:8080/v1/eventos', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function getEventById(id: string, token: string) {
  const res = await fetch(`http://localhost:8080/v1/eventos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}
