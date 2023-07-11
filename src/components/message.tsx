import useFitText from "use-fit-text";

type MessageProps = {
  message?: string;
};

const Message = ({ message }: MessageProps) => {
  const { fontSize, ref } = useFitText();
  return (
    <div
      ref={ref}
      className="comica-regular"
      style={{ fontSize, height: 170, width: 280 }}
    >
      {message}
    </div>
  );
};

export default Message;
