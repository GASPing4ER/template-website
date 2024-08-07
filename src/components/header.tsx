import Logo from "./logo";
import Navigation from "./navigation";
import TimeCapsule from "./time-capsule";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 p-4 border-b flex justify-center items-center bg-white z-[8]">
      <Navigation />
      <Logo />
      <TimeCapsule />
    </header>
  );
};

export default Header;
