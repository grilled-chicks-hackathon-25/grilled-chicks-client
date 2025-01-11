import { useEffect } from "react";

interface props {
  src: string;
  onModal: () => void;
}
const ImgModal = ({ src, onModal }: props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-main-black bg-opacity-70"
      onClick={onModal}
    >
      <img src={src} className=" w-[361px] h-[264px]" />
    </div>
  );
};

export default ImgModal;
