import { useState } from "react";
import { useNavigate } from "react-router";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
  noPadding?: boolean;
}
const Input = ({ placeholder, label, noPadding = false, ...props }: Props) => {
  return (
    <div className={`w-full ${noPadding ? "p-0" : "py-4"}`}>
      {label && (
        <label
          htmlFor=""
          className="mb-1 text-captionDefault text-contents-default-quaternary"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-[12px] w-full h-12 rounded-lg text-captionDefault border-[1px] border-background-base-border bg-background-base-default"
        {...props}
      />
    </div>
  );
};

const data = [
  {
    title: (
      <>
        가입하기 전 추천코드를 <br />
        입력해주세요.
      </>
    ),
    subTitle: <> 추천코드가 없다면 가입이 힘들어요</>,
  },
  {
    title: <>이메일을 통해 가입할게요</>,
    subTitle: <> 현재 다니고 있는 학교의 이메일로 인증해주세요.</>,
  },
  {
    title: <>이메일을 통해 가입할게요</>,
    subTitle: <> 현재 다니고 있는 학교의 이메일로 인증해주세요.</>,
  },
  {
    title: <>비밀번호를 입력해주세요</>,
    subTitle: <> 현재 다니고 있는 학교의 이메일로 인증해주세요.</>,
  },
  {
    title: <>가입이 완료됐어요!</>,
    subTitle: <> 사용자 인증 및 회원가입이 완료됐어요</>,
  },
  {
    title: <>이제 이름을 알려주세요</>,
    subTitle: <>꼭 실명을 적어주세요</>,
  },
  {
    title: <>어느 과를 다니고 있나요?</>,
    subTitle: <>현재 재학중인 과를 적어주세요</>,
  },
  {
    title: <>자신의 MBTI를 알고 계신가요?</>,
    subTitle: <>16가지 유형 중 하나를 적어주세요</>,
  },
  {
    title: <>자신의 사진을 등록해주세요</>,
    subTitle: <>최대 10개까지 등록할 수 있어요</>,
  },
  {
    title: <>자신을 소개해주세요!</>,
    subTitle: <>간단한 글로 다른 사람들에게 어필해보세요</>,
  },
  {
    title: (
      <>
        연애 중 선호하는 <br />
        연락 빈도를 입력해주세요
      </>
    ),
    subTitle: <>답은 다른 사람들한테도 공유 될거에요</>,
  },
  {
    title: (
      <>
        연애 중 선호하는 <br />
        데이트 빈도를 입력해주세요
      </>
    ),
    subTitle: <>답은 다른 사람들한테도 공유 될거에요</>,
  },
  {
    title: (
      <>
        한 번의 데이트에서 선호하는 <br />
        비용 범위를 입력해주세요
      </>
    ),
    subTitle: <>답은 다른 사람들한테도 공유 될거에요</>,
  },
];

function Landing() {
  const [page, setPage] = useState(0);

  const nav = useNavigate();
  return (
    <div className="layout flex items-center justify-center w-screen h-screen min-w-[393px] min-h-[764px]">
      <div className="flex flex-col w-[393px] h-[764px] bg-background-base-default shadow-[0_8px_12Px_0_rgba(0,0,0,0.3)] overflow-y-auto relative">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col h-full bg-white p-[32px_16px_0px_16px]">
            <div className="flex flex-col flex-1">
              <div>
                <p className="text-headingAccent">{data[page].title}</p>
                <p className="mt-1 text-bodyDefault text-contents-default-secondary">
                  {data[page].subTitle}
                </p>
              </div>
              <div className="h-[515px] mt-2 overflow-y-auto">
                {page <= 4 &&
                  (page === 4 ? (
                    <div className="flex ">
                      <span className="material-icons !text-[256px] justify-center mt-[142px] mx-auto">
                        check_circle
                      </span>
                    </div>
                  ) : (
                    <>
                      {page >= 3 && (
                        <>
                          <Input
                            placeholder="비밀번호를 입력해주세요."
                            label="비밀번호"
                          />
                        </>
                      )}
                      {page >= 2 && (
                        <>
                          <div className="flex items-end gap-1">
                            <Input
                              placeholder="숫자, 영문을 합친 6자리 코드를 입력해주세요."
                              label="이메일 인증"
                              value="whoisapple@kaywon.ac.k"
                            />
                            <button className="flex-shrink-0 py-[14px] px-4 h-12 my-4 bg-contents-default-primary text-white rounded-lg ">
                              재발송
                            </button>
                          </div>
                          <Input
                            placeholder="숫자, 영문을 합친 6자리 코드를 입력해주세요."
                            noPadding
                          />
                        </>
                      )}
                      {page === 1 && (
                        <Input
                          placeholder="숫자, 영문을 합친 6자리 코드를 입력해주세요."
                          label="이메일 인증"
                          value="whoisapple@kaywon.ac.k"
                        />
                      )}
                      {page >= 0 && (
                        <Input
                          placeholder="숫자, 영문을 합친 6자리 코드를 입력해주세요."
                          label="추천 코드"
                        />
                      )}
                    </>
                  ))}

                {page >= 5 && (
                  <>
                    {page >= 10 && (
                      <Input
                        placeholder="데이트 비용 범위를 입력해주세요"
                        label="데이트 비용 범위"
                      />
                    )}
                    {page >= 9 && (
                      <Input
                        placeholder="데이트 빈도를 입력해주세요"
                        label="데이트 빈도"
                      />
                    )}
                    {page >= 8 && (
                      <Input
                        placeholder="연락 빈도를 입력해주세요"
                        label="연락 빈도"
                      />
                    )}
                    {page >= 7 && <>이미지 등록</>}
                    {page >= 7 && (
                      <Input placeholder="MBTI를 입력해주세요" label="MBTI" />
                    )}
                    {page >= 6 && (
                      <>
                        <Input
                          placeholder="계원예술대학교"
                          label="재학중인 학교"
                        />
                        <Input placeholder="경영학과" noPadding />
                      </>
                    )}
                    {page >= 5 && <Input placeholder="홍길동" label="이름" />}
                  </>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                if (page === 10) {
                  nav("/wait");
                } else setPage(page + 1);
              }}
              className="flex items-center justify-center flex-shrink-0 w-full h-16 gap-1 my-3 text-white rounded-full bg-contents-default-primary"
            >
              {page === 4 || page === 10 ? "완료" : "다음"}
              <span className="text-white material-icons">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
