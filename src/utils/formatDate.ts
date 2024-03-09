export function formatDate(inputDate: any) {
  let date = new Date(inputDate);

  let day = date.getUTCDate().toString().padStart(2, '0');
  let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  let year = date.getUTCFullYear();

  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getUTCMinutes().toString().padStart(2, '0');

  return `${day}-${month}-${year} - ${hours}h${minutes}m`;
}
