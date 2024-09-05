import { setIconSize } from '@/utils';

export const WarningIcon = (props: { size?: string; color?: string }) => {
  const { size } = props;
  const color = props.color || '#F4F4F4';

  return (
    <svg
      width={setIconSize(size)}
      height={setIconSize(size)}
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.3343 37.738L29.2523 2.95522C28.3648 1.41799 26.7751 0.5 24.9999 0.5C23.2247 0.5 21.635 1.41779 20.7475 2.95522L0.665781 37.738C-0.221927 39.2752 -0.221927 41.1108 0.665781 42.6483C1.55349 44.1857 3.14295 45.1035 4.91816 45.1035H45.0823C46.8573 45.1035 48.447 44.1857 49.3345 42.6485C50.222 41.111 50.2218 39.2755 49.3343 37.738ZM25.0001 39.4447C23.2377 39.4447 21.8039 38.011 21.8039 36.2486C21.8039 34.4863 23.2377 33.0526 25.0001 33.0526C26.7625 33.0526 28.1963 34.4863 28.1963 36.2486C28.1961 38.0112 26.7623 39.4447 25.0001 39.4447ZM28.2179 25.7824C28.2179 27.5566 26.7743 29.0001 25.0001 29.0001C23.2259 29.0001 21.7824 27.5566 21.7824 25.7824V11.0143C21.7824 10.1725 22.4648 9.49008 23.3066 9.49008H26.6938C27.5358 9.49008 28.2181 10.1725 28.2181 11.0143V25.7824H28.2179Z"
        fill={color}
      />
    </svg>
  );
};
