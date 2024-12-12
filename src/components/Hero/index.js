
// const frame11 = './frame.png'

const Hero = () => {
  return (
    <div className="relative w-[1900px] h-[950px] bg-[#1573b1]">
      <img className="absolute w-[613px] h-[610px] top-[115px] left-[1064px]" src="/Frame 11.svg" alt="Frame"></img>
      <div className="absolute w-[651px] h-[516px] top-[142px] left-[139px]">
        <p className="absolute w-[642px] top-0 left-0 [font-family:'Abyssinica_SIL-Regular',Helvetica] font-normal text-white text-[84px] tracking-[0] leading-[normal]">
          Connecting Employers With Untapped Talent
        </p>

        <p className="absolute w-[642px] top-[364px] left-[5px] [font-family:'Abyssinica_SIL-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
          An innovative solution for HR professionals seeking stability.
        </p>

        <div className="absolute w-[186px] h-[47px] top-[469px] left-[5px] bg-[#15e6c3] rounded-[50px] overflow-hidden">
          <div className="absolute top-[5px] left-[17px] [text-shadow:0px_4px_4px_transparent] [font-family:'Abhaya_Libre-Regular',Helvetica] font-normal text-neutral-50 text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
