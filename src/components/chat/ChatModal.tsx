interface props {
    onModal?: () => void;
    status: keyof typeof ChatStatusInfo;
    name: string
}

const ChatStatusInfo = {
    yellow: (name: string) => ({
        title: [`이제 ${name}님과`, '대화가 시작돼요'],
        info: '새로운 관계가 시작될 때예요.',
        list: [
            {
                title: `${name}님이 대화를 수락했어요.`,
                info: [`${name}님이 첫 메시지를 확인하고`, '대화를 시작할 준비가 되었어요.']
            },
            {
                title: '노란 불이 빨간 불로 바뀌지 않게 조심하세요.',
                info: ['누구든 대화를 끝내고 싶으면', '빨간 불을 켜 관계를 마무리할 수 있어요.']
            },
            {
                title: '노란 불을 초록 불로 바꿔보세요.',
                info: ['하지만, 만약 둘의 관계가 우연을 넘어', '특별한 관계로 발전한다면 초록 불을 켜보세요.']
            }
        ],
        bgColor: 'bg-[#F3F327]',
        textColor: 'text-[#000000]',
        labelColor: 'bg-[#000000] text-[#FFFFFF]'
    }),
    red: (name: string) => ({
        title: [`${name}님이`, '빨간 불', '을 켰어요'],
        info: '두 사람의 이야기는 여기까지였나봐요.',
        list: [
            {
                title: `${name}님이 빨간 불을 켰어요`,
                info: ['두 분의 관계가 더는 이어지지 않는다고 판단하여', `${name}님이 빨간 불을 켰어요.`]
            },
            {
                title: '이제는 새로운 출발을 준비할 때예요.',
                info: [`${name}님의 결정으로 이 만남은 멈췄지만,`, '더 멋진 인연이 기다리고 있을지 몰라요.']
            },
            {
                title: '이제는 빨간 불을 받아들일 때예요.',
                info: ['이제는 새로운 길을 찾을 순간도 곧 올 거예요.', '이 만남의 끝이 당신에게 더 나은 시작이 되길 바라요.']
            }
        ],
        bgColor: 'bg-[#F34027]',
        textColor: 'text-[#FFFFFF]',
        labelColor: 'bg-[#FFFFFF] text-[#000000]'
    }),
    green: (name: string) => ({
        title: [`${name}님이`, '초록 불', '을 켰어요'],
        info: '좋은 만남 이어가길 바랄게요!',
        list: [
            {
                title: `${name}님이 초록 불을 켰어요.`,
                info: ['두 분의 관계가 단순한 소개 그 이상의 관계로', `발전했다고 판단하여 ${name}님이 초록 불을 켰어요.`]
            },
            {
                title: '계정 일시적으로 정지 될거에요.',
                info: ['둘 중 한명이 초록 불을 다시 끌 때 까지', '이 계정으로 메시지 제안이 오지 않아요.']
            },
            {
                title: '이제는 초록불을 더욱 빛낼 때예요.',
                info: [`이제는 현실로 돌아가 ${name}님의 초록 불을 더욱 밝혀주세요.`, '이 만남의 끝이 좋은 결말이길 바랄게요.']
            }
        ],
        bgColor: 'bg-[#27F342]',
        textColor: 'text-[#000000]',
        labelColor: 'bg-[#000000] text-[#FFFFFF]'
    })
} as const

const ChatModal = ({ onModal, status, name }: props) => {
    const data = ChatStatusInfo[status](name)
    return (
        <div className={`absolute z-50 w-full h-full flex flex-col gap-4 px-4 pt-12 pb-4 ${data.bgColor}`}>
            <div>
                <div className="mt-4 mb-1 ">
                    <span className={`text-displayDefault ${data.textColor}`}>{data.title[0]}</span>
                    <div>
                        <span className={`text-displayAccent ${data.textColor}`}>{data.title[1]}</span>
                        <span className={`text-displayDefault ${data.textColor}`}>{data?.title[2]}</span>
                    </div>
                </div>
                <span className={`text-titleDefault ${data.textColor}`}>{data.info}</span>
            </div>
            <div className="relative flex flex-col flex-1 py-3">
                <div className={`absolute w-0.5 h-40 left-[17px] top-4 ${data.labelColor} -z-10`}></div>
                <div className="flex gap-3">
                    <span className={`w-[36px] h-[36px] rounded-full ${data.labelColor} flex justify-center items-center text-titleDefault`}>1</span>
                    <div className="flex flex-col">
                        <span className={`text-bodyAccent ${data.textColor}`}>{data.list[0].title}</span>
                        <div className="flex flex-col">
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[0].info[0]}</span>
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[0].info[1]}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 pt-4">
                    <span className={`w-[36px] h-[36px] rounded-full ${data.labelColor} flex justify-center items-center text-titleDefault`}>2</span>
                    <div className="flex flex-col">
                        <span className={`text-bodyAccent ${data.textColor}`}>{data.list[1].title}</span>
                        <div className="flex flex-col">
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[1].info[0]}</span>
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[1].info[1]}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 pt-4">
                    <span className={`w-[36px] h-[36px] rounded-full ${data.labelColor} flex justify-center items-center text-titleDefault`}>3</span>
                    <div className="flex flex-col">
                        <span className={`text-bodyAccent ${data.textColor}`}>{data.list[2].title}</span>
                        <div className="flex flex-col">
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[2].info[0]}</span>
                            <span className={`text-captionDefault ${data.textColor}`}>{data.list[2].info[1]}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full h-[64px] bg-[#FFFFFF] rounded-full text-titleAccent text-contents-default-primary" onClick={onModal}>알겠어요</button>
        </div>
    )
}

export default ChatModal;