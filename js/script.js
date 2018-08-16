
// Requests random user images & set's them  as profile picture
$.ajax({
  url: 'https://randomuser.me/api/?gender=male',
  dataType: 'json',
  success: function(data) {


    let profileAvatar = document.getElementById('avatar');
    let profileSrc = data.results[0].picture.large;
    profileAvatar.setAttribute('src', profileSrc);
  }
});

let ctx = document.getElementById('trafficChart');
let trafficChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      borderColor: ['#47BCAB'],
      backgroundColor: 'rgba(140, 179, 53, 0.2)',
      borderWidth: 1,
      lineTension: 0
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
});
