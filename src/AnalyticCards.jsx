import PropTypes from "prop-types"

function Card(props) {
    console.log(props)
    return(
        <div className="dark:bg-[#121222] dark:border-[#1b1a2e] border hover:border-blue-950 hover:border-2 bg-white border-[#E5EAEF] rounded-lg flex flex-col p-4 gap-3">
            <div className="flex w-full justify-between items-center">
                <img src={`images/${props.icon}`} alt="" />
                <img src={`images/${props.chart}`} alt="" />
            </div>
            <div className="flex w-full flex-col justify-between">
                <p className="text-[#898989] text-lg font-normal">{props.header}</p>
                <p className="font-medium text-2xl text-[#3A3F51] dark:text-[#c8cddd]">{props.number}</p>
            </div>
            <div className="flex w-full flex-row justify-between items-center">
                <img src={`/images/${props.up}`} alt="" />
                <p className="text-[#898989] text-sm font-normal">vs. previous month</p>
            </div>
        </div>
    )
}
export default Card

Card.propTypes = {
    number : PropTypes.number,
    icon: PropTypes.string,
    chart: PropTypes.string,
    header: PropTypes.string,
    up: PropTypes.string
}