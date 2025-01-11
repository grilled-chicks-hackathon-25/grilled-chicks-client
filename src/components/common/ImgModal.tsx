import { useEffect } from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface props {
  src: string[];
  onModal?: () => void;
}
const ImgModal = ({ src, onModal }: props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Container
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-40"
      onClick={onModal}
    >
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {src.map((srcItem, idx) => (
            <SwiperSlide key={idx}>
              <BgImg src={srcItem} className={`w-[361px] h-[624px]`} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </Container>
  );
};

export default ImgModal;

const Container = styled.div`
  .swiper {
    width: 393px;
  }
  .swiper-pagination {
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, -50%);
  }
`;

const BgImg = styled.div<{ src: string }>`
  background: ${({ src }) => `url("${src}") no-repeat center/contain`};
  margin: 0 auto;
`;
