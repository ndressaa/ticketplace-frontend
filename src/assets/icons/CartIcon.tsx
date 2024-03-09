import { setIconSize } from '@/utils';

export const CartIcon = (props: { size?: string }) => {
  const { size } = props;

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_173_105)">
        <path
          d="M33.1231 5.94563C32.7129 5.45335 32.1994 5.05743 31.6189 4.78598C31.0385 4.51453 30.4054 4.37422 29.7646 4.375H6.18625L6.125 3.86313C5.99965 2.79915 5.48827 1.81815 4.6878 1.10611C3.88733 0.394076 2.85342 0.000498449 1.78208 0L1.45833 0C1.07156 0 0.700627 0.153645 0.427136 0.427136C0.153645 0.700627 0 1.07156 0 1.45833C0 1.84511 0.153645 2.21604 0.427136 2.48953C0.700627 2.76302 1.07156 2.91667 1.45833 2.91667H1.78208C2.13928 2.91671 2.48403 3.04785 2.75096 3.28521C3.01789 3.52257 3.18842 3.84963 3.23021 4.20437L5.23688 21.2669C5.4452 23.0414 6.29778 24.6776 7.63278 25.865C8.96779 27.0524 10.6923 27.7084 12.479 27.7083H27.7083C28.0951 27.7083 28.466 27.5547 28.7395 27.2812C29.013 27.0077 29.1667 26.6368 29.1667 26.25C29.1667 25.8632 29.013 25.4923 28.7395 25.2188C28.466 24.9453 28.0951 24.7917 27.7083 24.7917H12.479C11.5763 24.7891 10.6966 24.5075 9.96032 23.9853C9.22406 23.4631 8.66733 22.726 8.36646 21.875H25.7498C27.4594 21.8751 29.1147 21.2745 30.4264 20.1781C31.7382 19.0818 32.623 17.5594 32.9263 15.8769L34.071 9.52729C34.1853 8.8973 34.1596 8.24989 33.9958 7.63093C33.832 7.01197 33.5341 6.43661 33.1231 5.94563Z"
          fill="#F4F4F4"
        />
        <path
          d="M10.2084 35C11.8192 35 13.125 33.6942 13.125 32.0833C13.125 30.4725 11.8192 29.1667 10.2084 29.1667C8.59752 29.1667 7.29169 30.4725 7.29169 32.0833C7.29169 33.6942 8.59752 35 10.2084 35Z"
          fill="#F4F4F4"
        />
        <path
          d="M24.7917 35C26.4025 35 27.7083 33.6942 27.7083 32.0833C27.7083 30.4725 26.4025 29.1667 24.7917 29.1667C23.1808 29.1667 21.875 30.4725 21.875 32.0833C21.875 33.6942 23.1808 35 24.7917 35Z"
          fill="#F4F4F4"
        />
      </g>
      <defs>
        <clipPath id="clip0_173_105">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};