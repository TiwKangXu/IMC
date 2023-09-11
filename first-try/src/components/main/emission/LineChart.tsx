import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
    data1: number[];
    data2: number[];
    labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data1, data2, labels }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            // Destroy the existing chart if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const chartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: '2022',
                                data: data1,
                                borderColor: 'rgb(75, 192, 192)',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: '2023',
                                data: data2,
                                borderColor: 'rgb(255, 99, 132)',
                                borderWidth: 2,
                                fill: false,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                });

                // Save a reference to the chart instance
                chartInstanceRef.current = chartInstance;
            }
        }

        // Cleanup function
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data1, data2, labels]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
