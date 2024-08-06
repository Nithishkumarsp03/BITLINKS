import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class ApexChartMonthlyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Points",
        data: [10, 41, , 134, 49, 92, 69, 91, 48]
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
          // text: 'Connection Trends by Months',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
  ReactDOM.render(<ApexChartMonthlyGraph />, domContainer);
} else {
  console.error('Target container is not a DOM element.');
}

export default ApexChartMonthlyGraph;
