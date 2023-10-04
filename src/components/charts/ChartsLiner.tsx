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
import { reactionArtem } from "@/hooks/reaction";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface IItem {
    id: number,
    channel_id: number,
    post_date: string,
    point_date: string,
    keys: string[],
    values: number[],
    bot_index: number,
    shard: number
}

interface IChartsLiner {
  res: IItem[];
  chooseChart: string;
  title: string
}


export const ChartsLiner:FC<IChartsLiner> = ({
    res,
    chooseChart,
    title,
                                             }) => {

    const dataForChart = reactionArtem(res);


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

  res.forEach((element: IItem, index: number) => {
    labels.push(
        element.point_date.slice(11,)
    )
  })

    const randomFunc = (prev: number): number => {
        const x = Math.round(Math.random()*1000)
        if(x >= 255){
            return randomFunc(x/prev)
        } else return x
    }

  const cC = (i: number) => {
    return `rgb(
    ${randomFunc(1)}, 
    ${randomFunc(1)}, 
    ${randomFunc(1)}
    )`
  }

  const data = {
    labels: labels,
    datasets: res[res.length-1].keys.slice(chooseChart === "view" ? 0 : 1, chooseChart === "view" ? 1 : res.length).map((item, index: number) => (
            {
              label: item,
              data: dataForChart[`${item}`],
              borderColor: cC(index),
              // backgroundColor: cC(index),
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