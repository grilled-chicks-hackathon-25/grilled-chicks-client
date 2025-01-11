import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/chat/ChatInput";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Header from "../components/common/Header";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetChatMessage } from "../api/chat";

const Chat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { roomId } = useParams();

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  // const [messages, setMessages] = useState<string[]>([]);
  // const webSocket = useRef<WebSocket | null>(null);

  // useEffect(() => {
  //   webSocket.current = new WebSocket(`ws://t08eb-210-94-220-230.ngrok-free.app/api/opic/room/${roomId}/messages`);
  //   webSocket.current.onopen = () => {
  //     console.log("WebSocket 연결!");
  //   };
  //   webSocket.current.onclose = (error) => {
  //     console.log(error);
  //   };
  //   webSocket.current.onerror = (error) => {
  //     console.log(error);
  //   };
  //   webSocket.current.onmessage = (event: MessageEvent) => {
  //     setMessages((prev) => [...prev, event.data]);
  //   };

  //   return () => {
  //     webSocket.current?.close();
  //   };
  // }, []);

  const { data } = useQuery({
    queryKey: ["chat"],
    queryFn: () => GetChatMessage(Number(roomId)),
  });
  console.log(data);

  return (
    <div className="flex flex-col h-full">
      <Header justify="between">
        <div className="flex items-center gap-2">
          <img
            src="https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png"
            alt="이미지"
            className="object-cover w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-captionAccent">원하늘</span>
            <span className="text-captionDefault">21살</span>
          </div>
        </div>
        <span className="material-icons !text-[28px] text-contents-default-quaternary">
          traffic
        </span>
      </Header>
      <div
        className="flex flex-col flex-1 px-4 overflow-y-auto"
        ref={scrollRef}
      >
        <ChatBubble isMe={false}>주말에 같이 시장 가서 장 볼래?</ChatBubble>
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
