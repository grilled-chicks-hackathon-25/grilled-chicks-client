const Wait = () => {
  return (
    <div className="layout flex items-center justify-center w-screen h-screen min-w-[393px] min-h-[764px]">
      <div className="flex flex-col w-[393px] h-[764px] bg-background-base-default shadow-[0_8px_12Px_0_rgba(0,0,0,0.3)] overflow-y-auto relative">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center justify-center flex-1">
              <span className="material-icons !text-[64px] mb-2">groups_3</span>
              <p className="mb-1 text-captionDefault text-contents-default-quaternary">
                새 인연을 찾아보고 싶으면
              </p>
              <p className="mb-1 text-headingAccent">남자 1명, 여자 1명을</p>
              <p className="mb-2 text-headingAccent">
                초대해야 시작할 수 있어요
              </p>
              <p className="text-center text-bodyDefault text-contents-default-secondary">
                아래 링크를 복사한 후<br />
                친구들에게 공유하여 함께 시작해보세요!
              </p>
            </div>
            <button className="flex items-center justify-center flex-shrink-0 h-16 gap-1 mx-3 my-3 my-4 text-white rounded-full bg-contents-default-primary">
              링크 복사하기
              <span className="text-white material-icons">link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wait;
