import React from 'react';
import Chart from 'react-apexcharts';
export const RadialBarChart = () => {
    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: '#888',
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: '#ffffff',
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Security Scan'],
    };
    const series = [
        100
    ];

    return (
        <Chart
            options={options}
            series={series}
            type="radialBar"
            height="100%"
            width="100%" />
    )
}