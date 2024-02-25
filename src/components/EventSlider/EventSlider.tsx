export const EventSlider = (props: { title: string }) => {
  const { title } = props;

  return (
    <div>
      <p>{title}</p>
      slide de {title}
    </div>
  );
};
