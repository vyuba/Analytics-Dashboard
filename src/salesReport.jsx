function report(props) {
    const styles ={
        backgroundColor:props.color,
        width:props.progress
    }
    return(
        <div className="flex flex-col gap-1">
                <p className="font-medium text-base">{props.salesNam}</p>
                <div className="w-full h-3 bg-gray-100 rounded-md progressBar">
                  <div className=" rounded-md h-full" style={styles}></div>
                </div>
                <span className="flex text-base justify-between items-center text-[#525252]">
                  <p>${props.Amount}</p>
                  <p>+{props.percent}</p>
                </span>
        </div>
    )
}
export default report
