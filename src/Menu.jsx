import  Logo from "./assets/dashboard logo.png"
import  sun from "./assets/brightness 1.svg"
import  moon from "./assets/moon 1.svg"
import MenuCard from "./MenuCard"
// import data from "./Data"

function menu() {
    return (
      <div className="border  md:flex flex-col justify-between fixed top-0 left-0 transition-all w  hidden z-50 md:z-0  md:w-20 h-screen bg-[#F7F8FA] border-[#EBECF2] ">
        <div className=" flex flex-col items-start md:items-center pt-5 ">
          <img className="w-10 h-10" src={Logo} alt="" />
          <MenuCard
            img="./src/assets/category.png"
          />
          <MenuCard
            img="./src/assets/trend-up.png"
          />
          <MenuCard
            img="./src/assets/profile-2user.png"
          />
          <MenuCard
            img="./src/assets/box.png"
          />
          <MenuCard
            img="./src/assets/discount-shape.png"
          />
          <MenuCard
            img="./src/assets/info-circle.png"
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
            img="./src/assets/arrow-right.png"
          />
          <MenuCard
            img="./src/assets/setting-2.png"
          />
          <MenuCard
            img="./src/assets/logout.png"
          />
        </div>
      </div>
    )
}
export default menu