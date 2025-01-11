
interface props {
    imgUrl: string
    name: string
    age: number
    school: string
    mbti: string
}

const ProfileCard = ({ imgUrl, name, age, school, mbti }: props) => {
    return (
        <div className="flex flex-col p-2 w-fit h-fit rounded-[20px] border border-background-base-border bg-background-base-elevated">
            <img src={imgUrl} alt="유저 이미지" className="w-full h-full max-w-[345px] max-h-[345px] aspect-square object-cover rounded-xl" />
            <div className="flex flex-col gap-1 px-1 py-2">
                <div className="flex justify-between">
                    <div className="align-text-bottom">
                        <span className="text-headlineAccent text-contents-default-primary">{name}</span>
                        <span className="ml-1 text-captionDefault text-contents-default-quaternary">{age}살</span>
                    </div>
                    <button className="flex items-center pl-5 pr-3 py-2.5 rounded-full bg-background-accent-elevated">
                        <span className="text-captionAccent text-contents-status-positive">더 알아보기</span>
                        <span className="material-symbols-outlined !text-[20px] text-contents-status-positive">
                            arrow_right
                        </span>
                    </button>
                </div>
                <div className="flex items-center gap-1 ">
                    <div className="w-[68px] flex gap-1 items-center">
                        <span className="material-icons !text-[20px] text-contents-default-tertiary">school</span>
                        <span className="text-bodyDefault text-contents-default-tertiary">학교</span>
                    </div>
                    <span className="truncate text-bodyDefault text-contents-default-primary">{school}</span>
                </div>
                <div className="flex items-center gap-1 ">
                    <div className="w-[68px] flex gap-1 items-center">
                        <span className="material-symbols-outlined  !text-[20px] text-contents-default-tertiary">
                            ar_on_you
                        </span>
                        <span className="text-bodyDefault text-contents-default-tertiary">MBTI</span>
                    </div>
                    <span className="truncate text-bodyDefault text-contents-default-primary">{mbti.toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;