import TBHX from "../../assets/tbhx.webp";

function Header() {
  return (
    <header className="relative w-full py-4 flex justify-center items-center">
      <div className=" absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-black w-[25vw] sm:w-[30vw] md:w-[35vw] " />

      <img src={TBHX} alt="TBHX" className=" w-32 sm:w-40 md:w-48  z-10  " />

      <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-black w-[25vw] sm:w-[30vw] md:w-[35vw] " />
    </header>
  );
}

export default Header;
