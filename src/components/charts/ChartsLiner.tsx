'use client'
import {FC, useRef} from "react";
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
    Chart,
    ChartTypeRegistry
} from 'chart.js';
import { Button } from "@/components/UI/button/Button";
import {Line} from 'react-chartjs-2';
import {generatePoints} from "@/hooks/reaction";
import 'chartjs-adapter-moment';
import autocolors from 'chartjs-plugin-autocolors';
import { MiniMap } from "@/components/charts/miniMap/MiniMap";

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

    const chartRef = useRef<Chart<keyof ChartTypeRegistry, unknown> | null>(null)
    const {res, chooseChart, title} = liner;
    const dataForChart = generatePoints(res);

    const handleResetZoom = () => {
        if(chartRef.current)
            chartRef.current.resetZoom()
    }

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
                        modifierKey: 'shift'
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
        <div>
            <Button
                text={"сбросить ZOOM"}
                handler={handleResetZoom}
                type={"default"}
            />
            <Line ref={chartRef} options={options} data={data}/>
            {/*<MiniMap data={data} />*/}
        </div>
    )
}