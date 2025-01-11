import { useEffect, useRef } from "react";
import ChatInput from "../components/chat/ChatInput";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Chat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex flex-col flex-1 px-4 overflow-y-auto"
        ref={scrollRef}
      >
        <ChatBubble isMe={false}>주말에 같이 시장 가서 장 볼래?</ChatBubble>
        <ChatBubble isMe={true}>
          네가 취미로 시작한 요리, 정말 실력이 늘었더라!
        </ChatBubble>
        <ChatBubble isMe={true}>이번 주말에 가족끼리 나들이 갈까? </ChatBubble>
        <ChatBubble isMe={true}>
          요즘 취업 준비하느라 힘들어 보이는데, 괜찮아?
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 주 7시에 다 같이 모여서 저녁 먹자
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 명절에 다 같이 모이면 좋겠어~!
        </ChatBubble>
        <ChatBubble isMe={true}>내일 같이 영화 한 편 볼까?</ChatBubble>
        <ChatBubble isMe={true}>
          오늘 학교에서 무슨 일 있었니? 오늘 저녁에 다 같이 보드게임 할까? 엄마,
          오늘 저녁은 제가 요리할게
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 주 7시에 다 같이 모여서 저녁 먹자
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 명절에 다 같이 모이면 좋겠어~!
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 주 7시에 다 같이 모여서 저녁 먹자
        </ChatBubble>
        <ChatBubble isMe={true}>
          오늘 학교에서 무슨 일 있었니? 오늘 저녁에 다 같이 보드게임 할까? 엄마,
          오늘 저녁은 제가 요리할게
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 명절에 다 같이 모이면 좋겠어~!
        </ChatBubble>
        <ChatBubble isMe={false}>
          이번 주 7시에 다 같이 모여서 저녁 먹자
        </ChatBubble>
      </div>
      <ChatInput />
    </div>
  );
};

const ChatBubble = styled.p<{ isMe: boolean }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  max-width: 320px;
  word-wrap: break-word;
  margin-top: 16px;
  width: fit-content;
  ${({ isMe }) =>
    isMe
      ? css`
          padding: 10px 12px 10px 16px;
          background: black;
          color: #fff;
          border-radius: 20px 8px 8px 20px;
          align-self: end;
          & + & {
            margin-top: 2px;
          }
        `
      : css`
          padding: 10px 16px 10px 12px;
          background: #fff;
          color: #101016;
          border-radius: 8px 20px 20px 8px;
          border: 1px solid #e7e7e9;
          align-self: start;

          & + & {
            margin-top: 2px;
          }
        `};
`;
export default Chat;
