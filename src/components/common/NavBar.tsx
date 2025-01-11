const navItem = ["match", "chat", "community", "profile"];

const NavBar = () => {
  return (
    <nav className="rounded-t-xl bg-background-base-elevated border-background-base-border border-[1px]">
      <ul className="flex">
        {navItem.map((item) => (
          <li className="w-full h-[50px]">
            <button className="w-full h-full">
              <span className="material-icons">menu</span>

              {item === "match" ? <></> : <></>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
