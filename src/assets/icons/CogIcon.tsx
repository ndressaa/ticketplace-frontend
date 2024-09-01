import { setIconSize } from '@/utils';

export const CogIcon = (props: { size?: string; color?: string }) => {
  const { size } = props;
  const color = props.color || '#F4F4F4';

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5068 9.32622L22.0811 8.29615C23.5392 4.93309 23.4425 4.83315 23.1593 4.54143L21.2966 2.68431L21.1118 2.52536H20.896C20.7822 2.52536 20.4425 2.52536 17.611 3.83592L16.5689 3.40714C15.222 0 15.0839 0 14.6895 0H12.0619C11.6679 0 11.5148 -0.000449885 10.2657 3.41928L9.22803 3.84919C7.31458 3.02469 6.19239 2.60731 5.88955 2.60731L5.64115 2.61518L3.63761 4.61977C3.33359 4.9115 3.2275 5.01437 4.7692 8.32539L4.34499 9.35186C0.933838 10.6976 0.933838 10.8281 0.933838 11.2399V13.8691C0.933838 14.2815 0.933838 14.4269 4.35645 15.678L4.78059 16.7027C3.32272 20.0639 3.42066 20.1648 3.70388 20.4538L5.56657 22.3131L5.75187 22.4757H5.96868C6.08072 22.4757 6.41626 22.4757 9.25169 21.1624L10.292 21.5941C11.639 25.0008 11.7774 25 12.1726 25H14.8007C15.2026 25 15.3452 25 16.5981 21.582L17.641 21.1516C19.5522 21.9764 20.6718 22.3951 20.9728 22.3951L21.2229 22.3879L23.2417 20.371C23.5289 20.0752 23.6295 19.973 22.0964 16.6757L22.5177 15.6484C25.9338 14.3013 25.9338 14.1599 25.9338 13.7574V11.1312C25.9334 10.7174 25.9334 10.5729 22.5068 9.32622ZM13.4332 16.8737C11.0235 16.8737 9.06141 14.9104 9.06141 12.4979C9.06141 10.0873 11.0236 8.1258 13.4332 8.1258C15.8415 8.1258 17.7995 10.0877 17.7995 12.4979C17.7991 14.9104 15.8411 16.8737 13.4332 16.8737Z"
        fill={color}
      />
    </svg>
  );
};
