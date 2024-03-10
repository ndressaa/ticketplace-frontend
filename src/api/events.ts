export async function getAllEvents() {
  const res = await fetch('http://localhost:8080/v1/eventos', {
    // method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // atualizar para pegar o token do login
      Authorization: 'Bearer cDIxMnBvaW5teGEuMTcxMDAzMTA5Ng==',
    },
  });

  const data = await res.json();
  return data;
}

export async function getEventById(id: string) {
  const res = await fetch(`http://localhost:8080/v1/eventos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      // atualizar para pegar o token do login
      Authorization: 'Bearer cDIxMnBvaW5teGEuMTcxMDAzMTA5Ng==',
    },
  });

  const data = await res.json();
  return data;
}
