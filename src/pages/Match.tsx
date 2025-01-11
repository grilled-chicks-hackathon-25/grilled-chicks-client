import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import ProfileCard from "../components/match/ProfileCard";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Header from "../components/common/Header";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserInfo } from "../api/user";
import { GetList, GetSkipUser, IGetListProps } from "../api/match";
import { calculateAge } from "../util/age";
import InputModal from "../components/match/InputModal";

function Match() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [profileList, setProfileList] = useState<IGetListProps[]>([]);
  const [now, setNow] = useState<number>(0);

  const { data } = useQuery({
    queryKey: ["user-info"],
    queryFn: GetUserInfo,
  });
  const { data: listData, refetch } = useQuery({
    queryKey: ["matchList"],
    queryFn: () => GetList(data.userId),
    enabled: true,
  });
  useEffect(() => {
    refetch();
  }, [data]);

  useEffect(() => {
    setProfileList([...profileList, ...(listData || [])]);
  }, [listData]);

  useEffect(() => {}, [now]);

  const { mutate } = useMutation({
    mutationFn: () => GetSkipUser(data.userId, profileList[now].user_id),
    onSuccess: (data) => {
      setProfileList((prev) => [...prev, data]);
    },
  });
  const skipUser = () => {
    setNow((prev) => prev + 1);
    mutate();
  };

  const [inputVal, setInputVal] = useState<string>("");
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);

  const parentClick = () => {
    setIsMessageOpen(!isMessageOpen);
  };
  return (
    <>
      {isMessageOpen && (
        <InputModal
          value={inputVal}
          setValue={setInputVal}
          onModal={parentClick}
          id={profileList[now].user_id}
          from={data.userId}
        />
      )}
      <Header justify="end">
        <span className="material-icons text-contents-status-unabled">
          filter_alt
        </span>
      </Header>
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
        {profileList.map((item) => (
          <SwiperSlide className="px-4 w-fit" key={item.user_id}>
            <ProfileCard
              imgUrl={item.imgs[0].img_url}
              name={item.username}
              age={calculateAge(item.birth)}
              school={item.unive}
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
            onClick={() => {
              swiperRef.current?.swiper.slideNext();
              skipUser();
            }}
            className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#F34027]"
          >
            <span className="material-icons !text-[28px] text-[#FFFFFF]">
              swipe_right
            </span>
          </button>
          <Link
            to={`/match/${profileList[now]?.user_id}`}
            className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#F3F327]"
          >
            <span className="material-icons !text-[28px] text-[#000000]">
              account_circle
            </span>
          </Link>
          <button
            onClick={parentClick}
            className="w-full items-center justify-center p-2 border rounded-full h-[60px] flex border-background-base-border bg-[#47EF44]"
          >
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
