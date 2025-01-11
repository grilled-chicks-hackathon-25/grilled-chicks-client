import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="layout flex items-center justify-center w-screen h-screen min-w-[393px] min-h-[764px]">
      <div className="flex flex-col w-[393px] h-[764px] bg-background-base-default shadow-[0_8px_12Px_0_rgba(0,0,0,0.3)] overflow-y-auto">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Layout;
