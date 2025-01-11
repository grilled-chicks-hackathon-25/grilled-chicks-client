import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import ProfileCard from "../components/match/ProfileCard";
import { useRef } from "react";
import { Link } from "react-router";

const porfile = [
  {
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "원하늘",
    age: 23,
    school: "계원예술대학교 디지털미디어디자인과",
    mbti: "ESTJ",
  },
  {
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "원하늘",
    age: 23,
    school: "계원예술대학교 디지털미디어디자인과",
    mbti: "ESTJ",
  },
  {
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "원하늘",
    age: 23,
    school: "계원예술대학교 디지털미디어디자인과",
    mbti: "ESTJ",
  },
  {
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "원하늘",
    age: 23,
    school: "계원예술대학교 디지털미디어디자인과",
    mbti: "ESTJ",
  },
  {
    image: "https://chicken25.s3.ap-northeast-2.amazonaws.com/1_1.png",
    name: "원하늘",
    age: 23,
    school: "계원예술대학교 디지털미디어디자인과",
    mbti: "ESTJ",
  },
];

function Match() {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <>
      <div className="w-full py-1.5 px-4 flex justify-end">
        <span className="material-icons text-contents-status-unabled">
          filter_alt
        </span>
      </div>
      <Swiper
        ref={swiperRef}
        className="w-full px-4 mt-4"
        dir="rtl"
        spaceBetween={30}
        effect={"cards"}
        modules={[EffectCards]}
        allowTouchMove={false}
        initialSlide={0}
      >
        {porfile.map((item) => (
          <SwiperSlide className="px-4 w-fit">
            <ProfileCard
              imgUrl={item.image}
              name={item.name}
              age={item.age}
              school={item.school}
              mbti={item.mbti}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center flex-1 gap-3 px-4 py-[40.5px]">
        <div className="min-w-[72px] min-h-[72px] p-2 border border-background-base-border bg-background-base-elevated rounded-full flex items-center justify-center">
          <span className="material-icons !text-[28px] text-contents-status-unabled">
            flag
          </span>
        </div>
        <div className="flex items-center justify-center w-full gap-1 p-2 border rounded-full border-background-base-border bg-background-base-elevated">
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#F34027]"
          >
            <span className="material-icons !text-[28px] text-[#FFFFFF]">
              swipe_right
            </span>
          </button>
          <Link
            to={`/match/12`}
            className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#F3F327]"
          >
            <span className="material-icons !text-[28px] text-[#000000]">
              account_circle
            </span>
          </Link>
          <button className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#47EF44]">
            <span className="material-icons !text-[28px] text-[#FFFFFF]">
              mode_comment
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Match;
