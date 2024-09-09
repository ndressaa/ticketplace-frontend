export async function getUserTicketById(eventId: string, token: string) {
  const url = '/api/getUserTicketById';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: eventId,
      token,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
