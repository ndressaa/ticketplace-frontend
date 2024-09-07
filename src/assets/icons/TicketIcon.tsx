import { setIconSize } from '@/utils';

export const TicketIcon = (props: { size?: string; color?: string }) => {
  const { size } = props;
  const color = props.color || '#F4F4F4';

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.77906 28.5163C6.74711 27.7211 7.68493 25.2848 7.17079 23.3662C6.65672 21.4475 4.62643 19.8065 1.65837 20.6018C1.57822 20.3027 1.48741 19.992 1.39429 19.6733C0.531823 16.7222 -0.529424 13.0909 4.82817 11.6553L10.7567 10.0668L11.5278 12.9448C11.6343 13.3421 12.0428 13.578 12.4401 13.4715C12.8375 13.365 13.0733 12.9566 12.9668 12.5592L12.1957 9.6812L28.2016 5.39244C32.253 4.30686 34.5309 5.21312 35.805 11.4523C34.321 11.8499 31.6435 13.1894 32.5483 16.5663C33.4532 19.9431 36.4417 19.7644 37.9257 19.3668C39.9418 25.4071 38.4223 27.3309 34.3708 28.4165L18.365 32.7052L17.5938 29.8272C17.4873 29.4299 17.0789 29.194 16.6815 29.3005C16.2841 29.407 16.0483 29.8154 16.1548 30.2128L16.926 33.0908L10.9974 34.6794C5.63985 36.1149 4.74326 32.4395 4.01462 29.4525C3.93594 29.13 3.85922 28.8155 3.77906 28.5163ZM15.0944 26.2555C15.2009 26.6529 15.6094 26.8887 16.0067 26.7823C16.4041 26.6758 16.6399 26.2673 16.5335 25.87L15.7623 22.992C15.6558 22.5946 15.2474 22.3588 14.85 22.4652C14.4526 22.5717 14.2168 22.9802 14.3233 23.3775L15.0944 26.2555ZM12.5882 16.902C12.4817 16.5047 12.7175 16.0962 13.1149 15.9897C13.5123 15.8833 13.9207 16.1191 14.0272 16.5164L14.7983 19.3945C14.9048 19.7918 14.669 20.2003 14.2716 20.3067C13.8743 20.4132 13.4658 20.1774 13.3593 19.78L12.5882 16.902Z"
        fill={color}
      />
    </svg>
  );
};
