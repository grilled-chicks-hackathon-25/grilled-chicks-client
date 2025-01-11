interface props {
  imgUrl: string;
  name: string;
  age: number;
  school: string;
  mbti: string;
}

const ProfileCard = ({ imgUrl, name, age, school, mbti }: props) => {
  return (
    <div className="flex flex-col p-2 w-fit h-fit rounded-[20px] border border-background-base-border bg-background-base-elevated">
      <img
        src={imgUrl}
        alt="유저 이미지"
        className="w-full h-full max-w-[345px] max-h-[345px] aspect-square object-cover rounded-xl"
      />
      <div className="flex flex-col gap-1 px-1 py-2">
        <div className="flex justify-end">
          <div className="align-text-bottom">
            <span className="text-headlineAccent text-contents-default-primary">
              {name}
            </span>
            <span className="ml-1 text-captionDefault text-contents-default-quaternary">
              {age}살
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-1">
          <span className="truncate text-bodyDefault text-contents-default-primary">
            {school}
          </span>
          <div className="w-[68px] flex gap-1 items-center  justify-end">
            <span className="text-bodyDefault text-contents-default-tertiary">
              학교
            </span>
            <span className="material-icons !text-[20px] text-contents-default-tertiary">
              school
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1">
          <span className="truncate text-bodyDefault text-contents-default-primary">
            {mbti.toUpperCase()}
          </span>
          <div className="w-[68px] flex gap-1 items-center  justify-end">
            <span className="text-bodyDefault text-contents-default-tertiary">
              MBTI
            </span>
            <span className="material-symbols-outlined  !text-[20px] text-contents-default-tertiary">
              ar_on_you
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
