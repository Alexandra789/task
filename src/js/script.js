let button = document.getElementById('submit');
let notification = document.getElementById('notification');
let input = document.getElementById('form__input');
let form = document.getElementById('form');

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

function show(e) {
    if (input.value.length != 0) {
        e.preventDefault();
        setTimeout(
            () => {
                notification.classList.add('online');
            },
            200
        );
        setTimeout(
            () => { notification.classList.remove('online'); }, 2500);
    }
}

button.onclick = show;


