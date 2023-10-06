'use client'
import {FC} from "react";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {generatePoints} from "@/hooks/reaction";
import 'chartjs-adapter-moment';
import autocolors from 'chartjs-plugin-autocolors';

ChartJS.register(
    CategoryScale,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip,
    autocolors,
);

// This is a hack. Suggested by https://github.com/chartjs/chartjs-plugin-zoom/issues/617#issuecomment-1262764904
if (typeof window !== 'undefined') {
  (async () => {
    const { default: zoomPlugin } = await import('chartjs-plugin-zoom');
    ChartJS.register(zoomPlugin);
  })();
}

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

export const ChartsLiner: FC<IChartsLiner> = (liner) => {
    const {res, chooseChart, title} = liner;
    const dataForChart = generatePoints(res);

    const options = {
        responsive: true,
        interaction: {
            intersect: false
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: title,
            },
            autocolors: {
                mode: 'label' as const,
            },
            zoom: {
                zoom: {
                    drag: {
                        enabled: true,
                    },
                    mode: 'x' as const,
                }
            },
        },
        scales: {
            x: {
                type: 'time' as const,
            }
        },
        indexAxis: 'x' as const,
    };

    let keys: string[];
    if (chooseChart === 'view') {
        keys = ['@views'];
    } else {
        keys = res.at(-1)!.keys.filter((x) => {
            return x !== '@views'
        });
    }

    const data = {
        datasets: keys.map((item) => (
            {
                label: item,
                data: dataForChart.get(item)!,
                borderWidth: 3,
                radius: 0,
            }
        ))
    };

    return (
            <Line options={options} data={data}/>
    )
}