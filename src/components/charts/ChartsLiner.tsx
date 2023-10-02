'use client'
import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface IChartsLiner {
  res: any;
  chooseChart: string;
  title: string
}

export const ChartsLiner:FC<IChartsLiner> = ({
    res,
    chooseChart,
    title,
                                             }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };


  const labels: string[] = []

  res.data.forEach((element, index) => {
    labels.push(
        element.point_date.slice(11,)
    )
  })

  const cC = (i: number) => {
    return `rgb(
    ${faker.datatype.number({ min: 0, max: 255 })}, 
    ${faker.datatype.number({ min: 0, max: 255 })}, 
    ${faker.datatype.number({ min: 0, max: 255 })}
    )`
  }

    const q = res.data[res.data.length-1]["data.key"].slice(0,1).map((item, index) => (
        {
            label: item,
            data: res.data.map(item =>  +item["data.value"][index]),
            // borderColor: cC(index),
            backgroundColor: cC(index),
        }
    ))
    console.log(q)

  const data = {
    labels,
    datasets: chooseChart === "view" ?
        res.data[res.data.length-1]["data.key"].slice(0,1).map((item, index) => (
            {
              label: item,
              data: res.data.map(item =>  +item["data.value"][index]),
              // borderColor: cC(index),
              backgroundColor: cC(index),
            }
        ))
        :
        res.data[res.data.length-1]["data.key"].slice(1).map((item, index) => (
            {
                label: item,
                data: res.data.map(item =>  index !== 0 ? +item["data.value"][index] : null),
                // borderColor: cC(index),
                backgroundColor: cC(index),
            }
        ))
  };

  return (
      <div>
        <div className={"w-full flex justify-center text-[26px]"}>
          {chooseChart}
        </div>
        <Line options={options} data={data} />
      </div>
  )
}
