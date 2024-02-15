import Header from "./Header"
import BarChart from "./BarChart"
import {UserData} from "./Data"
import { useState } from "react"
import Card from "./AnalyticCards"
import Table from "./table"
import Report from "./salesReport";
import { sales } from "./salesData"
import { analyticsData } from "./analyticsData"
import { Chart as ChartJS } from "chart.js/auto"
import { flushSync } from "react-dom"

function Container({toggle}) {
  const AnalyticData = analyticsData.map((data)=>{
    return(
      <Card
        key ={data.id}
        icon={data.icon}
        number={data.number}
        up= {data.secondicon}
        chart ={data.image}
        header={data.header}
      />
    )
  });

    const SalesData = sales.map((sales)=>{
      return(
        <Report
            key ={sales.id}
            salesNam={sales.salesName}
            Amount={sales.Amount}
            color={sales.backgroundColor}
            percent={sales.percent}
            progress={sales.progress}
        />
      )
    })

    const [userData, ]= useState({
      labels: UserData.map((data) => data.month),
      datasets:[{
        label:"sales gained",
        data: UserData.map((data) => data.sales),
        backgroundColor: 'rgba(52, 202, 165, 0.1)',
        borderRadius: 30,
        hoverBackgroundColor: "#34CAA5",
      }]
    })
    const options = {
      scales:{
        y:{
          beginAtZero: true,
          border:{
            dash:[2,6],
            display: false,
          }
        },
        x:{
          beginAtZero: true,
          border:{
            dash:[6,6],
            display: false,
          }
        },
      },
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          display: false,
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
    };
  


    return (
      <div className="w-full bg-[#FAFAFA] dark:bg-[#0c0c18] md:ml-20 main">
        <Header
          toggle={toggle}
        />
        <div className="flex gap-5 flex-col w-full h-fit py-5 px-5">
          <div className="flex flex-col  md:flex-row w-ful gap-2 h-fit justify-between">
          <div className="dark:bg-[#121222] dark:border-[#1b1a2e] grow-0 lg:grow-[6] h-[374px] border-2 rounded-lg border-[#EDF2F7] bg-white  overflow-auto">
            <div className='flex justify-between px-5 py-4  items-center'>
                <p className='font-medium text-lg dark:text-[#b4bdcf]'>Sales Trends</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-sm dark:text-[#c8cddd]'>Short by :</p>
                    <div className='border rounded-xl px-2 py-1 dark:border-[#101a6b] dark:text-[#c8cddd] flex text-sm'>
                        Weekly
                        <div >
                          <svg className=" fill-[#0D062D] dark:fill-slate-50 "  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill=""/>
                          </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-auto w-full">
            <BarChart chartData={userData} SecondData={options} />
            </div>
        </div>

            <div className=" lg:grow-[4] grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-3">
             {AnalyticData}
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 md:flex-row h-fit">
            <Table/>
            <div className="dark:bg-[#121222] dark:border-[#1b1a2e] bg-white min-w-40 grow-[4] h-fit border border-[#E5EAEF] rounded-lg flex px-5 py-4 flex-col">
              <span className="flex justify-between text-lg pb-5">
                  <p className="text-[#26282C] dark:text-[#b4bdcf]">Top Platform</p>
                  <p className="text-[#34CAA5] dark:text-[#1bfac2] ">See all</p>
              </span>
              {SalesData}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Container;