function initMap() {

    //js object with latitude and logitude
    const loc = {lat: 22.718670, lng: 75.855713}

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center : loc
    });

    const marker = new google.maps.Marker({
        position:loc,map : map
    });
}

//Smooth Scrolling

$('#navbar a, .btn').on('click', function(event){

    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
}); 

document.addEventListener('scroll', function() {
    if (window.scrollY >150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    }
    else {
        document.querySelector('#navbar').style.opacity =1;
    }
});



//animation-handling 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#main-heading').addEventListener('animationend', function() {
        document.querySelector('#main-para').style.animationPlayState = 'running';
        document.querySelector('#main-para').addEventListener('animationend', function(){
            document.querySelector('#main-button').style.animationPlayState = 'running';
        });
    });
});