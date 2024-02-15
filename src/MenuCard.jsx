// import categrory from "./assets/category.png"

function menuCard(props) {
    return(
        <div className="w-full rounded-2xl md:border-none px-5 md:px-5 md:hover:bg-transparent py-5 md:py-0 my-0 md:my-5">
            <li className="w-full flex list-none items-center  md:justify-center">
            <img className="w-7 h-7" src={props.img} alt="" />
            </li>
        </div>
    )
}

export default menuCard