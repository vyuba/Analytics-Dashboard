// import React from 'react'
import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS } from "chart.js/auto"
import ArrowDown from "./assets/Arrow - Down 2.svg"
// import React from 'react';
function barChart({chartData}) {
    return(

        <div className=" grow-0 lg:grow-[6] h-[374px] border-2 rounded-lg border-[#EDF2F7] bg-white  overflow-auto">
            <div className='flex justify-between px-5 py-4  items-center'>
                <p className='font-medium text-lg'>Sales Trends</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-sm'>Short by :</p>
                    <div className='border rounded-xl px-2 py-1 flex text-sm'>
                        Weekly
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>
            </div>
            <Bar height={375}
                data={chartData}
            />
        </div>
    
    )
}
export default barChart