import styled from "@emotion/styled";
import { ImgModal, MessageBtn } from "../components/common";
import { useState } from "react";
import Header from "../components/common/Header";
import { useNavigate } from "react-router";

const imgData = [
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
  "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
];

const MatchDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate()
  const onModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {isModalOpen && <ImgModal src={imgData} onModal={onModal} />}
      <BgImg
        src={imgData[0]}
        className="relative flex w-full p-4 align-bottom aspect-square "
      >
        <Header justify="start" isAbsolute>
          <button className="material-icons text-[#FFFFFF] !text-[28px]" onClick={() => navigate("/match")} >
            arrow_back_ios
          </button>
        </Header>
        <div className="z-10 mt-auto">
          <span className="text-white text-displayAccent">원하늘</span>
          <span className="mb-1 ml-1 text-white text-titleDefault">23살</span>
        </div>
        <MessageBtn />
      </BgImg>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-titleAccent">자기소개</p>
        <p className="text-captionDefault">
          안녕하세요! 매일을 특별하게 만드는 순간을 사랑하는 사람입니다. 귀여운
          물건을 수집하거나 예쁜 카페를 탐방하는 게 취미예요. 여행 계획을 세우는
          것도 좋아하고, 상상력과 따뜻함이 제 장점입니다. 소소한 일상부터 인생
          이야기까지 함께 나누며 즐거운 시간을 보낼 수 있는 분을 만나고 싶어요.
          우리 함께 작은 행복들을 찾아볼까요? 😊
        </p>
        <div className="flex gap-1 overflow-x-auto">
          {imgData.map((item, idx) => (
            <button
              className="shrink-0 w-[100px] aspect-square rounded-lg"
              onClick={onModal}
              key={idx}
            >
              <img src={item} className="shrink" />
            </button>
          ))}
        </div>
      </div>
      <Line className="text-background-base-border" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-1 ">
          <div className="w-[80px] flex gap-1 items-center">
            <span className="material-icons !text-[20px] text-contents-default-tertiary">school</span>
            <span className="text-captionDefault text-contents-default-tertiary">학교</span>
          </div>
          <span className="truncate text-captionDefault text-contents-default-primary">계원예술대학교 디지털미디어디자인과</span>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="w-[80px] flex gap-1 items-center">
            <span className="material-symbols-outlined !text-[20px] text-contents-default-tertiary">
              ar_on_you
            </span>
            <span className="text-captionDefault text-contents-default-tertiary">MBTI</span>
          </div>
          <span className="truncate text-captionDefault text-contents-default-primary">ESTJ</span>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="w-[80px] flex gap-1 items-center">
            <span className="material-icons !text-[20px] text-contents-default-tertiary">
              cake
            </span>
            <span className="text-captionDefault text-contents-default-tertiary">생년월일</span>
          </div>
          <span className="truncate text-captionDefault text-contents-default-primary">06. 10. 16</span>
        </div>
      </div>
      <Line className="text-background-base-border" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-titleAccent">하늘님의 연애 스타일</p>
        <WhiteBox>
          <div className="flex mb-1">
            <p className="text-bodyAccent">선호하는 연락 빈도는?</p>
            <span className="ml-auto material-icons text-contents-default-quaternary">
              chat_bubble
            </span>
          </div>
          <p className="text-contents-default-quaternary text-captionDefault">
            일주일에 1-2번 정도 연락하고 싶어요
          </p>
        </WhiteBox>
        <WhiteBox>
          <div className="flex mb-1">
            <p className="text-bodyAccent">선호하는 데이트 빈도는?</p>
            <span className="ml-auto material-icons text-contents-default-quaternary">
              meeting_room
            </span>
          </div>
          <p className="text-contents-default-quaternary text-captionDefault">
            격주로 만나는 게 적당해요.
          </p>
        </WhiteBox>
        <WhiteBox>
          <div className="flex mb-1">
            <p className="text-bodyAccent">데이트 시 선호하는 비용 수준은?</p>
            <span className="ml-auto material-icons text-contents-default-quaternary">
              wallet
            </span>
          </div>
          <p className="text-contents-default-quaternary text-captionDefault">
            데이트 비용에 크게 신경 쓰지 않으며, 하고 싶은 활동에 따라
            자유롭게지출할 수 있어요.
          </p>
        </WhiteBox>
      </div>
      <Line className="text-background-base-border" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-titleAccent">원하늘님은 이런 사람이에요</p>
        <WhiteBox>
          <p className="mb-1 text-bodyAccent">
            요즘 빠져있는 취미나 관심사가 있나요?
          </p>
          <p className="text-contents-default-quaternary text-captionDefault">
            요즘 뜨개질이나 스티커 모으기에 빠져 있어요! 손으로 직접 뭔가
            만드는게 너무 재밌더라고요.
          </p>
        </WhiteBox>
        <WhiteBox>
          <p className="mb-1 text-bodyAccent">
            주말에 주로 뭐 하면서 보내세요?
          </p>
          <p className="text-contents-default-quaternary text-captionDefault">
            요즘 뜨개질이나 스티커 모으기에 빠져 있어요! 손으로 직접 뭔가
            만드는게 너무 재밌더라고요.
          </p>
        </WhiteBox>
        <WhiteBox>
          <p className="mb-1 text-bodyAccent">
            최근 본 영화나 드라마 중 추천할 만한 거 있나요?
          </p>
          <p className="text-contents-default-quaternary text-captionDefault">
            ‘이상한 나라의 앨리스’ 같은 동화적인 이야기들이 늘 제
            마음을사로잡아요. 상상력을 자극하는 게 너무 좋아요.
          </p>
        </WhiteBox>
        <WhiteBox>
          <p className="mb-1 text-bodyAccent">
            어디든 갈 수 있다면 지금 가고 싶은 곳은?
          </p>
          <p className="text-contents-default-quaternary text-captionDefault">
            일본의 작은 골목길이나 스위스의 마을 같은 아기자기한 곳들이요.
            사진찍기 딱 좋을 것 같아요!
          </p>
        </WhiteBox>
      </div>
    </div>
  );
};

export default MatchDetail;

const BgImg = styled.div<{ src: string }>`
  background: ${({ src }) => `linear-gradient(transparent, black),
    url("${src}") no-repeat center/cover`};
`;

const Line = styled.hr`
  width: 361px;
  margin: 8px 16px;
`;

const WhiteBox = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color:white;
  border 1px solid #E7E7E9
`;
