import { setIconSize } from '@/utils';

export const ProfileIcon = (props: { size?: string }) => {
  const { size } = props;

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.125 17.5C21.9575 17.5 25.875 13.5825 25.875 8.75C25.875 3.91751 21.9575 0 17.125 0C12.2925 0 8.375 3.91751 8.375 8.75C8.375 13.5825 12.2925 17.5 17.125 17.5Z"
        fill="#F4F4F4"
      />
      <path
        d="M17.125 20.4167C9.87959 20.4248 4.00807 26.2963 4 33.5417C4 34.3471 4.6529 35 5.45831 35H28.7916C29.597 35 30.2499 34.3471 30.2499 33.5417C30.2419 26.2963 24.3704 20.4247 17.125 20.4167Z"
        fill="#F4F4F4"
      />
    </svg>
  );
};
