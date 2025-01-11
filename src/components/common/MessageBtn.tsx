const MessageBtn = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="absolute bg-white rounded-full bottom-4 right-4 w-14 h-14"
      {...props}
    >
      <span className="material-icons text-contents-default-primary">
        mode_comment
      </span>
    </button>
  );
};

export default MessageBtn;
