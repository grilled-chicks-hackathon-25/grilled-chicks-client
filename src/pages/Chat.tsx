import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/chat/ChatInput";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Header from "../components/common/Header";
import LightModal from "../components/chat/LightModal";
import ChatModal from "../components/chat/ChatModal";
import { useNavigate } from "react-router";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetChatMessage, IresChatMessageGetApi } from "../api/chat";
import { Storage } from "../Storage";
import Stomp from "@stomp/stompjs";
import { Client } from "@stomp/stompjs";

const client = new StompJs.Client({
  brokerURL:
    "ws://t08eb-210-94-220-230.ngrok-free.app/api/opic/room/${roomId}/messages/ws",
  connectHeaders: {
    login: "user",
    passcode: "password",
  },
  reconnectDelay: 5000, //자동 재 연결
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

const Chat = () => {
  const [state, setState] = useState("free");
  useEffect(() => {
    const stateStore = Storage.getItem("wow");
    if (stateStore) setState("nope");
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { id: roomId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [chatStatus, setChatStatus] = useState<null | "green" | "red">(null);
  const navigate = useNavigate();

  const onModal = (status?: "red" | "green") => {
    if (status) {
      setChatStatus(status);
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const [client, changeClient] = useState(null);
  const [chat, setChat] = useState<string>("");
  const [chatList, setChatList] = useState<string[]>([]);

  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [messages, setMessages] = useState<IresChatMessageGetApi[]>([]);

  const connect = () => {
    const token = Storage.getItem("access_token");

    try {
      const stomp = new Client({
        brokerURL:
          "ws://4eed-210-94-220-230.ngrok-free.app/topic/room/1/messages",
        connectHeaders: {
          Authorization: `Bearer ${token}`,
        },
        debug: (str: string) => {
          console.log(str);
        },
        reconnectDelay: 5000, //자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
      setStompClient(stomp);

      stomp.activate();

      stomp.onConnect = () => {
        console.log("WebSocket 연결이 열렸습니다.");
        // const subscriptionDestination = `/topic/room/${roomId}/messages`;

        stomp.subscribe("", (frame) => {
          try {
            const parsedMessage = JSON.parse(frame.body);

            console.log(parsedMessage);
            setMessages((prevMessages) => [...prevMessages, parsedMessage]);
          } catch (error) {
            console.error("오류가 발생했습니다:", error);
          }
        });
      };
    } catch (err) {
      console.log(err);
    }
  };

  const disConnect = () => {
    if (client === null) return;
    client.deactivate();
  };

  const callback = function (message: any) {
    if (message.body) {
      const msg = JSON.parse(message.body);
      setChatList((chats) => [...chats, msg]);
    }
  };
  useEffect(() => {
    connect();

    return () => disConnect();
  }, []);

  const { data: InitialMessage } = useQuery({
    queryKey: ["chat"],
    queryFn: () => GetChatMessage(Number(roomId)),
  });
  useEffect(() => {
    setMessages(InitialMessage);
  }, [InitialMessage]);

  return (
    <div className="flex flex-col h-full">
      {isModalOpen &&
        (chatStatus ? (
          <ChatModal
            onModal={() => navigate("/match")}
            status={chatStatus || "yellow"}
            name="하은"
          />
        ) : (
          <LightModal onModal={onModal} />
        ))}
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
        <span
          className="material-icons !text-[28px] text-contents-default-quaternary cursor-pointer"
          onClick={() => onModal()}
        >
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
