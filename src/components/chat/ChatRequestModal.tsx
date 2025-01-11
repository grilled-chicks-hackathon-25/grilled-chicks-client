import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Header from "../common/Header";

interface props {
    onModal: (status?: boolean) => void;
    user: profile;
}

interface profile {
    userId: number,
    image: string
    name: string
    age: number
    message: string
}

const ChatRequestModal = ({ onModal, user }: props) => {
    return (
        <div className="absolute top-0 left-0 z-50 flex flex-col w-full h-full bg-background-base-default">
            <Header justify="between">
                <div className="flex gap-1">
                    <button className="material-icons text-contents-default-quaternary !text-[28px]" onClick={() => onModal()}>
                        arrow_back_ios
                    </button>
                    <div className="flex items-center gap-2">
                        <img
                            src={user.image}
                            alt="이미지"
                            className="object-cover w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-captionAccent">{user.name}</span>
                            <span className="text-captionDefault">{user.age}</span>
                        </div>
                    </div>
                </div>
            </Header>
            <div className="h-full px-4 py-2">
                <ChatBubble isMe={false}>{user.message}</ChatBubble>
            </div>
            <div className="py-1.5 px-4 flex gap-2">
                <button className="w-full h-[64px] bg-[#F34027] flex gap-1 items-center justify-center rounded-full" onClick={() => onModal()}>
                    <span className="material-icons text-[#FFFFFF] !text-[28px]">
                        swipe_right
                    </span>
                    <span className="text-titleAccent text-[#FFFFFF]">모른 척 하기</span>
                </button>
                <button className="w-full h-[64px] bg-[#27F342] flex gap-1 items-center justify-center rounded-full" onClick={() => onModal(true)}>
                    <span className="material-icons text-contents-default-primary !text-[28px]">
                        mode_comment
                    </span>
                    <span className="text-titleAccent text-contents-default-primary">연락하기</span>
                </button>
            </div>
        </div>
    )
}

export default ChatRequestModal;

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