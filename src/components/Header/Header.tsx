import Link from 'next/link';

export const Header = (props: { isLoginOrSignup: boolean }) => {
  const { isLoginOrSignup } = props;

  return (
    <>
      {isLoginOrSignup ? (
        <div>
          <Link href="./">Ticketplace</Link>
        </div>
      ) : (
        <div>
          logo
          <br />
          localization
          <br />
          <Link href="./cart">Carrinho</Link>
        </div>
      )}
    </>
  );
};
