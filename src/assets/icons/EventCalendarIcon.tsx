import { setIconSize } from '@/utils';

export const EventCalendarIcon = (props: { size?: string }) => {
  const { size } = props;

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_173_122)">
        <path
          d="M0 27.7083C0 31.729 3.27104 35 7.29167 35H27.7083C31.729 35 35 31.729 35 27.7083V14.5833H0V27.7083ZM12.2456 22.8623H15.5225L16.3917 19.5329C16.5287 19.005 17.0027 18.6375 17.5467 18.6273C18.0906 18.6375 18.5646 19.005 18.7017 19.5329L19.5708 22.8623H22.8477C23.5069 22.8623 23.9138 23.3785 23.9138 23.8481C23.9138 24.4008 23.5287 24.866 23.0883 25.111L20.8075 26.3798L21.8196 29.1404C22.015 29.6756 21.8385 30.275 21.3835 30.6177C20.9183 30.9677 20.2767 30.9633 19.8158 30.6075L17.5467 28.8531L15.2775 30.6075C14.8167 30.9633 14.175 30.9677 13.7098 30.6177C13.2548 30.275 13.0783 29.6756 13.2738 29.1404L14.2858 26.3798L12.005 25.111C11.5646 24.866 11.1796 24.4008 11.1796 23.8481C11.1796 23.38 11.5865 22.8623 12.2456 22.8623ZM35 10.2083V11.6667H0V10.2083C0 6.18771 3.27104 2.91667 7.29167 2.91667H8.75V1.45833C8.75 0.653333 9.40333 0 10.2083 0C11.0133 0 11.6667 0.653333 11.6667 1.45833V2.91667H23.3333V1.45833C23.3333 0.653333 23.9867 0 24.7917 0C25.5967 0 26.25 0.653333 26.25 1.45833V2.91667H27.7083C31.729 2.91667 35 6.18771 35 10.2083Z"
          fill="#F4F4F4"
        />
      </g>
      <defs>
        <clipPath id="clip0_173_122">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
