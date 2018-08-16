$.ajax({
  url: 'https://randomuser.me/api/?gender=male',
  dataType: 'json',
  success: function(data) {


    let profileAvatar = document.getElementById('avatar');
    let profileSrc = data.results[0].picture.large;
    profileAvatar.setAttribute('src', profileSrc);
  }
});
