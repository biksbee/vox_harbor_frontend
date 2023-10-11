import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip, ChartTypeRegistry, Chart
} from 'chart.js';
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

export const Test = () => {

    const chartRef = useRef<Chart<keyof ChartTypeRegistry, unknown> | null>(null);

    const handleResetZoom = () => {
        if(chartRef.current)
            chartRef.current.resetZoom();
    };

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
                text: "test" as const,
            },
            autocolors: {
                mode: 'label' as const,
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month' as const
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value' as const
                    }
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x' as const
                },
                zoom: {
                    drag: {
                        enabled: true,
                        modifierKey: 'shift'
                    },
                    mode: 'x' as const,
                }
            }
        },
        indexAxis: 'x' as const,
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'testLine',
                data: [50, 60, 70, 80, 90, 100, 110, 500, 600, 700, 800, 900, 1000, 1100, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 50000, 60000, 70000, 80000, 90000, 100000, 110000],
                borderWidth: 3,
                radius: 0,
            },
        ]
    };

    return (
        <div className={"w-full"}>
            <button onClick={handleResetZoom}>Сбросить зум</button>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};
