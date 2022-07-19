import React from 'react';
import Chart from 'react-apexcharts';
export const LineChart = () => {
  const options = {
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 5,
      dashArray: 0
    },
    dataLabels: {
      enabled: false
    },
    chart: {
      id: "area",
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
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
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#56577A"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#2CD9FF", "#582CFF"],
    },
    colors: ["#2CD9FF", "#582CFF"],

  };
  const series = [
    {
      name: "Transactions In",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
      name: "Transactions Out",
      data: [10, 70, 35, 70, 29, 80, 90, 61]
    }
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="100%"
      width="100%" />
  )
}