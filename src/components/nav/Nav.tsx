import Logo from "@/assets/Logo";
import NavLink from "./NavLink";

const Nav = () => {
  const gradient = "bg-gradient-to-t from-transparent to-gray-900 to-80%";
  return (
    <nav
      className={`${gradient} fixed z-50 flex h-14 w-full items-center justify-around px-2 sm:px-8 lg:h-20 lg:px-20`}
    >
      <Logo className="h-full w-auto lg:scale-75" />
      <div className="flex gap-2 md:gap-6 lg:gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/tvs">Series</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
