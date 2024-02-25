import Link from 'next/link';

export const BottomNavBar = () => {
  return (
    <div>
      <nav>
        <Link href="./">Home</Link>
        <br />
        <Link href="./events">Eventos</Link>
        <br />
        <Link href="./">Promoções</Link>
        <br />
        <Link href="./login">Perfil</Link>
      </nav>
    </div>
  );
};
