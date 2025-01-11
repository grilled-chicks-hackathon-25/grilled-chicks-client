import { useMutation } from "@tanstack/react-query";
import { PostRequest } from "../../api/match";

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onModal?: (e: React.MouseEvent) => void;
  id: number;
  from: number;
}

const InputModal = ({ from, onModal, setValue, value, id }: props) => {
  const onMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { mutate } = useMutation({
    mutationFn: () => PostRequest(from, id),
  });

  const onClick = () => {
    mutate();
  };

  return (
    <div
      className="fixed bottom-[50px] w-[393px] left-1/2 -translate-x-1/2 h-full"
      onClick={onModal}
    >
      <div
        className=" px-4 py-3 w-full bg-white absolute bottom-[50px] left-0"
        onClick={onMessage}
      >
        <p className="mb-1 text-captionDefault text-contents-default-quaternary">
          첫 메시지 보내기
        </p>
        <div className="flex text-captionDefault">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="메시지를 입력해주세요..."
            className="text-captionDefault p-[12px_18px_18px_12px] focus:outline-black w-full h-12 border-background-base-border border-[1px] rounded-[100px_8px_8px_100px]  bg-background-base-default px-3 py-4"
          />
          <button
            onClick={onClick}
            className="shrink-0 w-12 h-12 bg-black border-none rounded-[8px_100px_100px_8px] text-captionDefault placeholder:text-contents-status-unselected"
          >
            <span className="text-white align-middle material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
