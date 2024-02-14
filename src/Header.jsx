// import logo from "./assets/Dashboard.png"
import ProfileImage from "./assets/Rectangle 1061.png"
import ArrowDown from "./assets/Arrow - Down 2.svg"
import Calendar from "./assets/calendar.svg"
import Notification from "./assets/bell.svg"
import SearchIcon from "./assets/Icon - Search.svg"
function header() {

  return (
    <>
    <nav className="w-full h-[88px] bg-[#FAFAFA] border border-[#E5EAEF] flex items-center justify-between px-4">
          <div className="background md:hidden">
            <button className="menu__icon">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
      <div className="flex justify-between items-center w-full pr-5" >
          <h1 className="text-2xl text-[#26282C] font-semibold">Dashboard</h1>
        <div className="border-2 border-[#E5EAEF] rounded-3xl md:w-[349px] h-[48px] hidden md:flex items-center gap-2 px-2 shrink-0">
          <img src={SearchIcon} alt="" />
        <input className=" w-full outline-none border-none bg-transparent placeholder:text-[#E5EAEF] font-sans" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className=" flex gap-3 lg:gap-5 justify-center items-center">
        <div className="hidden lg:flex justify-center items-center md:gap-1">
          <img className=" p-2 rounded-full border-2 border-[#E5EAEF] " src={Calendar} alt="" />
          <p className="font-medium text-sm hidden lg:block"> November 15,2023</p>
        </div>
        {/* <div className="grid place-items-center w-10 h-10 rounded-full border-2 border-[#E5EAEF] "> */}
          <img className=" p-2 rounded-full border-2 border-[#E5EAEF] " src={Notification} alt="" />
        {/* </div> */}
        <div className="flex gap-1 border-2 border-[#E5EAEF] min-w-20 lg:w-[250px]  lg:h-12 rounded-3xl items-center justify-center md:justify-evenly">
            <img className="rounded-full" src={ProfileImage} alt="" />
            <span className="text-sm hidden lg:block">
              <p className="text-[#26282C] font-medium"> Justin Bergson</p>
              <p className="text-[#787486] ">Justin@gmail.com</p>
            </span>
            <img className="" src={ArrowDown} alt="" />
        </div>
      </div>
    </nav>
    </>
  )
}

export default header