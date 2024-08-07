import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class ApexChartYearlyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Points",
        data: [0, 41, 35, 51, 159, 2, 69, 91, 0]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false // Disable the toolbar here
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          // text: 'Connection Trends by Years',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['2020', '2021', '2022', '2023', '2023', '2024', '2025'],
        }
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
if (domContainer) {
  ReactDOM.render(<ApexChartYearlyGraph />, domContainer);
} else {
  console.error('Target container is not a DOM element.');
}

export default ApexChartYearlyGraph;
