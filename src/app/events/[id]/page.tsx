export default function Page({ params }: { params: { id: string } }) {
  return <div>Evento exemplo {params.id}</div>;
}
