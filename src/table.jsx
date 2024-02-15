import { tableData } from './tableData'
import TableCard from './TableCard'

function table() {
    const data = tableData.map((data)=>{
        return(
            <TableCard
            key = {data.key}
            img={data.img}
            name={data.id}
            amount={data.amount}
            status={data.status}
            date={data.date}
        />
        )

    })
    return(
        <div className= "dark:bg-[#121222] dark:border-[#1b1a2e] bg-white min-w-60 grow-[6] max-w-[800px] h-fit border border-[#E5EAEF] rounded-lg flex px-5 py-4 flex-col">
            <span className="flex justify-between text-lg">
                <p className="text-[#26282C] dark:text-[#b4bdcf]">Last Orders</p>
                <p className="text-[#34CAA5] dark:text-[#1bfac2]">See all</p>
            </span>
            <div className='overflow-auto'>
            <table className="w-full h-fit capitalize min-w-[600px] text-base text-left">
                <thead>

                <tr className="text-[#9CA4AB] font-normal">
                    <th>name</th>
                    <th>date</th>
                    <th>amount</th>
                    <th>status</th>
                    <th>invoice</th>
                </tr>
                </thead>
                
                <tbody>

                {data}
                </tbody>
            </table>
            </div>
            
        </div>
    )
    
}
export default table