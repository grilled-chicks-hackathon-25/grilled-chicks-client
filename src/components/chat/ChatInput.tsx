import { useState } from "react";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex gap-1 px-4 py-3 bg-white">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="메시지를 입력해주세요..."
        className="focus:outline-black w-full h-12 border-background-base-border border-[1px] rounded-[100px_8px_8px_100px]  bg-background-base-default px-3 py-4"
      />
      <button className="shrink-0 w-12 h-12 bg-black border-none rounded-[8px_100px_100px_8px] text-captionDefault placeholder:text-contents-status-unselected">
        <span className="text-white align-middle material-icons">send</span>
      </button>
    </div>
  );
};

export default ChatInput;
