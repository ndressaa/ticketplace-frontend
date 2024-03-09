import { setIconSize } from '@/utils';

export const HomeIcon = (props: { size?: string }) => {
  const { size } = props;

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.0833 8.41381V2.98399C32.0833 2.17914 31.4315 1.52593 30.625 1.52593C29.8185 1.52593 29.1667 2.17914 29.1667 2.98399V6.43376L21.579 1.31451C19.1012 -0.356424 15.8988 -0.356424 13.421 1.31451L3.21271 8.20239C1.20167 9.55984 0 11.8184 0 14.246V27.771C0 31.7909 3.27104 35.0613 7.29167 35.0613H10.2083C11.0148 35.0613 11.6667 34.4081 11.6667 33.6032V20.4807C11.6667 19.6773 12.32 19.0227 13.125 19.0227H21.875C22.68 19.0227 23.3333 19.6773 23.3333 20.4807V33.6032C23.3333 34.4081 23.9852 35.0613 24.7917 35.0613H27.7083C31.729 35.0613 35 31.7909 35 27.771V14.246C35 11.9409 33.915 9.7873 32.0833 8.41381Z"
        fill="#F4F4F4"
      />
    </svg>
  );
};