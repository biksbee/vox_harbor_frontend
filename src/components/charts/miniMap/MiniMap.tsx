import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';



export const MiniMap = ({ data }) => {
    const miniMapRef = useRef(null);

    useEffect(() => {
        const miniMapChart = new Chart(miniMapRef.current, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: data.datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    zoom: {
                        zoom: {
                            enabled: true,
                            drag: false,
                            mode: 'xy',
                            speed: 0.05
                        },
                        pan: {
                            enabled: false,
                            mode: 'xy'
                        }
                    }
                }
            }
        });

        return () => {
            miniMapChart.destroy();
        };
    }, [data]);

    return <canvas ref={miniMapRef} />;
};
