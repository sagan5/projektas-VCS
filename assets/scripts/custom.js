console.log("Pavyko!");

// function myMap(){
// var rikis = {lat: 54.6746045, lng: 25.2804137};
// var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: rikis});
// var marker = new google.maps.Marker({position: rikis, map: map});
// }

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  });
});