import { Link, useLocation } from "react-router";

const navItem = [
  { label: "매칭", href: "/match", icon: "dashboard" },
  { label: "채팅", href: "/chat", icon: "forum" },
  { label: "커뮤니티", href: "/community", icon: "language" },
  { label: "프로필", href: "/profile", icon: "person" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="rounded-t-xl bg-background-base-elevated border-background-base-border border-[1px]">
      <ul className="flex">
        {navItem.map(({ href, label, icon }) => (
          <li className="w-full h-[50px] ">
            <Link
              to={href}
              className="flex flex-col items-center justify-center w-full h-full columm"
            >
              <span
                className={`mb-[2px] material-icons  ${
                  pathname !== href && "text-contents-status-unselected"
                }`}
              >
                {icon}
              </span>
              <p
                className={`text-footnoteDefault
                  ${pathname !== href && "text-contents-status-unselected"}`}
              >
                {label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
