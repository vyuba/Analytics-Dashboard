// import React from 'react'
import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS } from "chart.js/auto"
// import ArrowDown from "./assets/Arrow - Down 2.svg"
// import React from 'react';
function barChart({ chartData, SecondData }) {
    console.log(SecondData)
    return(
        
            <Bar width={700} height={300}
                data={chartData}
                options={SecondData }
            />
        
    
    )
}
export default barChart