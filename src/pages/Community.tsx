import { useNavigate } from "react-router";
import Header from "../components/common/Header";
import styled from "@emotion/styled";

const Community = () => {
  const navigate = useNavigate();
  const isDone = false;

  return (
    <div className="h-full ">
      <Header
        justify="start"
        className="sticky top-0 bg-background-base-default"
      >
        <button
          className="material-icons text-contents-default-quaternary !text-[28px]"
          onClick={() => navigate("/community")}
        >
          arrow_back_ios
        </button>
      </Header>
      <div className="sticky p-4 top-11 bg-background-base-default">
        <p className="text-headlineAccent">전 애인이랑 헤어진 이유는?</p>
        <button
          className="mt-4 w-full h-16 rounded-full border-[1px] border-background-base-border text-titleAccent bg-white disabled:text-contents-status-unselected"
          disabled={isDone}
        >
          {isDone ? "답변완료" : "답변하기"}
        </button>
      </div>
      <div className="p-4 pb-[2px] sticky top-[196px] bg-background-base-default">
        <div className="flex items-center justify-between mb-1">
          <p className="text-titleAccent">이성의 답변</p>
          <p className="text-captionDefault text-contents-default-quaternary">
            질문에 답을 남기면 볼 수 있어요!
          </p>
        </div>
      </div>
      <BeforeContent className="min-h-[472px] px-4 relative">
        <div className="p-4 rounded-xl border-[1px] border-background-base-border bg-white mb-1">
          <div className="flex gap-1">
            <img src="" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-captionAccent">원하늘</p>
              <p className="text-captionDefault">21살</p>
            </div>
          </div>
          <p className="mt-1 text-contents-default-secondary text-captionDefault">
            ㅋㅋㅋ 전애인이 갑자기 채식주의자 됐는데 나까지 강요하는 거임 🥗
            고기 먹을 때마다 잔소리하고... 식당 가면 메뉴 고르는 데만 1시간 ㅡㅡ
            "난 삼겹살이 좋아" 했더니 "넌 동물 학대자" 라면서 헤어지자고 함
            ㅋㅋ...
          </p>
        </div>
        <div className="p-4 rounded-xl border-[1px] border-background-base-border bg-white mb-1">
          <div className="flex gap-1">
            <img src="" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-captionAccent">원하늘</p>
              <p className="text-captionDefault">21살</p>
            </div>
          </div>
          <p className="mt-1 text-contents-default-secondary text-captionDefault">
            ㅋㅋㅋ 전애인이 갑자기 채식주의자 됐는데 나까지 강요하는 거임 🥗
            고기 먹을 때마다 잔소리하고... 식당 가면 메뉴 고르는 데만 1시간 ㅡㅡ
            "난 삼겹살이 좋아" 했더니 "넌 동물 학대자" 라면서 헤어지자고 함
            ㅋㅋ...
          </p>
        </div>
      </BeforeContent>
    </div>
  );
};

export default Community;

const BeforeContent = styled.div`
  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(217, 217, 217, 0.01);
    backdrop-filter: blur(12px);
  }
`;
