import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen min-w-[393px] min-h-[764px]">
      <div className="w-[393px] h-[764px]  bg-[#F4F4F6] shadow-[0_8px_12Px_0_rgba(0,0,0,0.3)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
