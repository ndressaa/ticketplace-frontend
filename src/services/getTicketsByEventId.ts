export async function getTicketsByEventId(eventId: any, token: string) {
  const url = '/api/getTicketsByEventId';
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
    const responseTickets = await fetch(url, options);
    const json = await responseTickets.json();
    return json;
  } catch (error) {
    return error;
  }
}
