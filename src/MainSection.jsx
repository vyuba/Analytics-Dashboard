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

function Container() {
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

    return (
      <div className="w-full bg-[#FAFAFA] md:ml-20">
        <Header/>
        <div className="flex gap-5 flex-col w-full h-fit py-5 px-5">
          <div className="flex flex-col  md:flex-row w-ful gap-2 h-fit justify-between">
            <BarChart chartData={userData}/>
            <div className=" lg:grow-[4] grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-3">
             {AnalyticData}
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 md:flex-row h-fit">
            <Table/>
            <div className="bg-white min-w-40 grow-[4] h-fit border border-[#E5EAEF] rounded-lg flex px-5 py-4 flex-col">
              <span className="flex justify-between text-lg pb-5">
                  <p className="text-[#26282C]">Top Platform</p>
                  <p className="text-[#34CAA5]">See all</p>
              </span>
              {SalesData}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Container;