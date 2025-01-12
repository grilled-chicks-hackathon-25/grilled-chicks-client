import { useNavigate } from "react-router";
import ChatRequestModal from "../components/chat/ChatRequestModal";
import { useState } from "react";
import ChatModal from "../components/chat/ChatModal";
import { Storage } from "../Storage";

const chatRequest = [
  {
    userId: 1,
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "강민지",
    age: 21,
    message: "뭐해요?",
  },
  {
    userId: 2,
    image:
      "https://chicken25.s3.ap-northeast-2.amazonaws.com/e2f8b4c54096b3f67b9fc69cddbf80a7.jpg",
    name: "원하늘",
    age: 23,
    message: "안녕하세요",
  },
  {
    userId: 3,
    image:
      "https://chicken25.s3.ap-northeast-2.amazonaws.com/20250111193831_1_1.png",
    name: "김수정",
    age: 20,
    message: "잘 잤어요?",
  },
];

const ChatList = () => {
  const [isModalOpen, setIsModalOpen] = useState<number>(-1);
  const [chatStatus, setChatStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const onModal = (status?: boolean) => {
    if (status) {
      setChatStatus(true);
    } else {
      setIsModalOpen(-1);
    }
  };

  return (
    <div className="pt-[44px] px-4 flex flex-col gap-4">
      {isModalOpen !== -1 &&
        (chatStatus ? (
          <ChatModal
            onModal={() => {
              Storage.setItem("wow", "nope");
              navigate(`/chat/${chatRequest[isModalOpen].userId}`);
            }}
            status={"yellow"}
            name={chatRequest[isModalOpen].name}
          />
        ) : (
          <ChatRequestModal onModal={onModal} user={chatRequest[isModalOpen]} />
        ))}
      {chatRequest.map((data, index) => (
        <button
          className="flex items-center gap-2 text-start"
          onClick={() => setIsModalOpen(index)}
        >
          <img
            src={data.image}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <div>
            <p className="text-bodyAccent text-contents-default-primary">
              {data.name}
            </p>
            <p className="truncate text-captionDefault text-contents-default-secondary">
              {data.message}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatList;
