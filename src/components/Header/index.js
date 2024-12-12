import React from "react";


export const Header = () => {
  return (
    <div className="relative w-[1728px] h-[108px] bg-white">
      <div className="absolute w-[675px] h-[35px] top-[37px] left-[412px]">
        <div className="left-0 absolute top-0 [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Home
        </div>

        <div className="absolute top-0 left-[106px] [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Abot Us
        </div>

        <div className="left-[233px] absolute top-0 [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Services
        </div>

        <div className="absolute top-0 left-[366px] [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          How We Work
        </div>

        <div className="left-[570px] absolute top-0 [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Careers
        </div>
      </div>

      <img
        className="absolute w-[220px] h-[49px] top-[30px] left-24"
        alt="Logo"
        src="/logo.svg"
      />

      <div className="absolute w-[145px] h-[51px] top-[29px] left-[1495px] bg-[#3356f2] rounded-[50px] overflow-hidden">
        <div className="absolute top-[7px] left-[34px] [text-shadow:0px_4px_4px_transparent] [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-neutral-50 text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
          Enroll
        </div>
      </div>
    </div>
  );
}

export default Header;



