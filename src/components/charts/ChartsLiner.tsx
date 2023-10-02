'use client'
import { FC } from "react";
import res from "@/mock/dataCharts.json"
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
  chooseChart: string;
  title: string
}

export const ChartsLiner:FC<IChartsLiner> = ({
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


  const data = {
    labels,
    datasets: res.data[res.data.length-1]["data.key"].map((item, index) => (
        index !== 0 ?
            {
              label: item,
              data: res.data.map(item =>  index !== 0 ? +item["data.value"][index] : null),
              // borderColor: cC(index),
              backgroundColor: cC(index),
            } : null
    ))
  };

  return (
      <Line options={options} data={data} />
  )
}
