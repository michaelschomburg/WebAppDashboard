//Chart Variables
let traffic = document.getElementById('traffic-chart').getContext('2d');
let dailyTraffic = document.getElementById('daily-traffic').getContext('2d');
let mobileUsers = document.getElementById('mobile-users').getContext('2d');
const alert = document.getElementById('alert-container');
const closeAlert = document.getElementById('close-btn');

//Close the Alert when X is clicked

closeAlert.addEventListener('click', () => {
  alert.style.display = 'none';
});

//Chart Objects

let lineChart = new Chart(traffic, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250
      ],
      pointBackgroundColor: "#fff",
      pointBorderColor: "#4863A0",
      pointBorderWidth: '2',
      backgroundColor: ['rgba(116,119,191, 0.4)'],
      lineTension: 0,
    }]
  },
  options: {
    responsivec: true,
    legend: {display: false},
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 20,
      }
    },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        stepSize: 500,
      }
    }]
  },
  tooltips: {
    xPadding: 20,
    yPadding: 10,
  },
}
});

const barChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: 
        [75, 110, 175, 125, 225, 200, 100],
        backgroundColor: '#4863A0',

      }]
  },
  options: {
    responsive: true,
  },
});

const pieChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tables', 'Desktop'],
    datasets: [{
      data: [20, 15, 60],
      backgroundColor: [
        'rgba(0, 230, 115)',
        'rgb(0, 143, 179)',
        '	rgb(136, 77, 255)'
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        padding: 15,
      }
    },
  },
});