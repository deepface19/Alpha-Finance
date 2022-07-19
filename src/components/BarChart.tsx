import React from 'react';
import Chart from 'react-apexcharts';
export const BarChart = () => {
    const options = {
        chart: {
            height: 350,
            type: "bar",
            stacked: true,
            toolbar: {
                show: true
            },
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: "Plus Jakarta Display",
            },
            onDatasetHover: {
                style: {
                    fontSize: "12px",
                    fontFamily: "Plus Jakarta Display",
                },
            },
            theme: "dark",
        },
        xaxis: {
            categories: [
                'Transfer',
                'Staking',
                'Trigger Smart Contract',
                'Voting',
            ],
            show: false,
            labels: {
                show: false,
                style: {
                    colors: "#ffffff",
                    fontSize: "6px",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            color: "#ffffff",
            labels: {
                show: true,
                style: {
                    colors: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Plus Jakarta Display",
                },
            },
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            borderColor: "#56577A"
        },
        fill: {
            colors: ["#58BDFF", "#58BDFF", "#2CD9FF", "#4126C1"],
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 15,
                columnWidth: "50px",
            },
        },
        
        responsive: [
            {
                breakpoint: 768,
            },
        ],
    };
    const series = [{
            data: [20, 1, 5, 1],
        }];

    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            height="100%"
            width="100%" />
    )
}