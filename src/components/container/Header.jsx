import TBHX from '../../assets/tbhx.webp';

function Header() {

  return (
    <div className='flex mt-2 justify-center items-center w-full h-max'>
      <div className="w-[42vw] bg-black h-10  left-0 absolute"></div>
      <div className="w-[42vw] bg-black h-10  right-0 absolute"></div>
      <img src={TBHX} className='w-[192px]' alt="" />
    </div>
  );
}

export default Header;
