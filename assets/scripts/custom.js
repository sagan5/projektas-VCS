// console.log("Pavyko!");

// burger menu

$(document).ready(function(){
				$('.burger').click(function(){
					$('.nav').toggleClass('show');
				});
			});

// galery carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
	items:1
})

// Google maps NOT WORKING???
// function myMap(){
// var rikis = {lat: 54.6746045, lng: 25.2804137};
// var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: rikis});
// var marker = new google.maps.Marker({position: rikis, map: map});
// }

