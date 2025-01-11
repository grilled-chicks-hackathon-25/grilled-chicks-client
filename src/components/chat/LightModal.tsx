import Header from "../common/Header";

interface props {
    onModal: (status?: 'red' | 'green') => void;
}

const LightModal = ({ onModal }: props) => {
    return (
        <div className="absolute z-50 flex flex-col w-full h-full bg-background-base-default">
            <Header justify="start">
                <button className="material-icons text-contents-default-quaternary !text-[28px]" onClick={() => onModal()}>
                    arrow_back_ios
                </button>
            </Header>
            <div className="flex flex-col gap-4 px-4 py-12">
                <span className="text-headlineAccent text-contents-default-primary">어떤 불을 킬까요?</span>
                <button className="flex flex-col w-full gap-1 p-4 rounded-[20px] bg-[#27F342]" onClick={() => onModal('green')}>
                    <div className="size-[36px] p-1.5 bg-[#FFFFFF] rounded-full">
                        <span className="material-icons text-[#27F342]">
                            favorite
                        </span>
                    </div>
                    <div className="text-start">
                        <span className="text-titleAccent text-[#000000]">초록 불 켜기</span>
                        <div>
                            <p className="text-captionDefault text-[#000000]">상대와 단순한 소개 상대 그 이상의 관계로 나아갈 때 켜요.</p>
                            <p className="text-captionDefault text-[#000000]">둘 중 한명이 초록불을 끌 때 까지 계정이 비활성화 돼요.</p>
                        </div>
                    </div>
                </button>
                <button className="flex flex-col w-full gap-1 p-4 rounded-[20px] bg-[#F34027] mt-2" onClick={() => onModal('red')}>
                    <div className="size-[36px] p-1.5 bg-[#FFFFFF] rounded-full">
                        <span className="material-icons text-[#F34027]">
                        do_not_disturb_on
                        </span>
                    </div>
                    <div className="text-start">
                        <span className="text-titleAccent text-[#FFFFFF]">빨간 불 켜기</span>
                        <div>
                            <p className="text-captionDefault text-[#FFFFFF]">상대방과의 관계를 끝마쳐요.</p>
                            <p className="text-captionDefault text-[#FFFFFF]">관계를 마치고 서로 다른 상대를 찾아 떠나게 돼요.</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default LightModal;