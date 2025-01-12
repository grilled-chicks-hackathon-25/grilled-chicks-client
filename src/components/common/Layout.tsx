import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar";
import { Storage } from "../../Storage";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
const regex = /^\/([^/]+)/;

const Layout = () => {
  const [state, setState] = useState(Storage.getItem("wow"));
  useEffect(() => {
    setState(Storage.getItem("wow"));
  }, [Storage.getItem("wow")]);

  const { pathname } = useLocation();

  const match = pathname.match(regex);
  let current = "/";
  if (match) {
    current = `/${match[1]}`;
  }

  return (
    <div className="layout flex items-center justify-center w-screen h-screen min-w-[393px] min-h-[764px]">
      <div className="flex flex-col w-[393px] h-[764px] bg-background-base-default shadow-[0_8px_12Px_0_rgba(0,0,0,0.3)] overflow-y-auto relative">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <NavBar />
      </div>
      {state === "nope" && current !== "/chat" && (
        <Container>
          <A>
            <p className="text-titleAccent">현재 초록 불이 켜져있어요.</p>
            <p className="text-captionDefault text-contents-default-secondary">
              현재 하늘님과 초록불을 같이 킨 상태에요.
              <br />
              초록불이 켜져있는 동안은 새로운 인연을 탐색할 수 없어요.
            </p>
            <button
              onClick={() => {
                Storage.setItem("wow", "");
                window.location.reload();
              }}
              className="border-[1px] border-background-base-border flex items-center justify-center flex-shrink-0 w-full h-12 gap-1 my-3 rounded-full"
            >
              초록 불을 이제 끌게요
            </button>
          </A>
        </Container>
      )}
    </div>
  );
};

export default Layout;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  z-index: 39;
  display: flex;
  align-items: end;
  padding-bottom: 60px;
`;

const A = styled.div`
  width: 90%;
  background: white;
  border-radius: 16px;
  margin: 0 auto;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
