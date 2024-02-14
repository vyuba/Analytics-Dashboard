import  Logo from "./assets/dashboard logo.png"
import  sun from "./assets/brightness 1.svg"
import  moon from "./assets/moon 1.svg"
import MenuCard from "./MenuCard"
import dashboard from "./assets/category.png"
import records from "./assets/trend-up.png"
import profiles from "./assets/profile-2user.png"
import settings from "./assets/discount-shape.png"
import notice from "./assets/info-circle.png"
import box from "./assets/box.png"
import arrow from "./assets/arrow-right.png"
import mainSettings  from "./assets/setting-2.png"
import logout from "./assets/logout.png"
// import data from "./Data"

function menu() {
    return (
      <div className="border  md:flex flex-col justify-between fixed top-0 left-0 transition-all w  hidden z-50 md:z-0  md:w-20 h-screen bg-[#F7F8FA] border-[#EBECF2] ">
        <div className=" flex flex-col items-start md:items-center pt-5 ">
          <img className="w-10 h-10" src={Logo} alt="" />
          <MenuCard
            img={dashboard}
          />
          <MenuCard
            img={records}
          />
          <MenuCard
            img={profiles}
          />
          <MenuCard
            img={box}
          />
          <MenuCard
            img={settings}
          />
          <MenuCard
            img={notice}
          />
          <div className="bg-white w-11 h-20 md:flex flex-col items-center rounded-3xl hidden mx-5 md:mx-5">
              <div className="w-9 h-9 mt-1 rounded-full grid place-items-center bg-green-400">
                <img src={sun} alt="" />
              </div>
              <div className="w-9 h-9 mb-1  rounded-full grid place-items-center">
                <img src={moon} alt="" />
              </div>
          </div>
        </div>
        <div>
          <MenuCard
            img={arrow}
          />
          <MenuCard
            img={mainSettings}
          />
          <MenuCard
            img={logout}
          />
        </div>
      </div>
    )
}
export default menu