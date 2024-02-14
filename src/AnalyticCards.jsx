import PropTypes from "prop-types"

function Card(props) {
    console.log(props)
    return(
        <div className=" border bg-white border-[#E5EAEF] rounded-lg flex flex-col p-4 gap-3">
            <div className="flex w-full justify-between items-center">
                <img src={props.icon} alt="" />
                <img src={props.chart} alt="" />
            </div>
            <div className="flex w-full flex-col justify-between">
                <p className="text-[#898989] text-lg font-normal">{props.header}</p>
                <p className="font-medium text-2xl text-[#3A3F51]">{props.number}</p>
            </div>
            <div className="flex w-full flex-row justify-between items-center">
                <img src={props.up} alt="" />
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