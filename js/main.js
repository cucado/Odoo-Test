const heartDiv = document.querySelector('#heart');
const icon = heartDiv.querySelector('i');
const heartDiv2 = document.querySelector('#heart2');
const icon2 = heartDiv2.querySelector('i');

heartDiv.classList.remove('heart-fill');
heartDiv.classList.add('heart');
icon.classList.remove('bi-heart-fill');
icon.classList.add('bi-heart');

heartDiv2.classList.remove('heart-fill');
heartDiv2.classList.add('heart');
icon2.classList.remove('bi-heart-fill');
icon2.classList.add('bi-heart');


heartDiv.addEventListener('click', function() {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');

    heartDiv.classList.remove('heart');
    heartDiv.classList.add('heart-fill');
});
heartDiv.addEventListener('click', function() {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');

    heartDiv.classList.remove('heart');
    heartDiv.classList.add('heart-fill');
});

heartDiv.addEventListener('mouseover', function(e) {
    if(icon.classList==='bi-heart-fill'){
        if(e.target.classList==='heart'){
            heartDiv.classList.remove('heart');
            heartDiv.classList.add('heart-fill');
        }
        else{
            heartDiv.classList.remove('heart-fill');
            heartDiv.classList.add('heart');
        }
    }


});



heartDiv2.addEventListener('click', function() {
    icon2.classList.remove('bi-heart');
    icon2.classList.add('bi-heart-fill');

    heartDiv2.classList.remove('heart');
    heartDiv2.classList.add('heart-fill');
});
heartDiv2.addEventListener('click', function() {
    icon2.classList.remove('bi-heart');
    icon2.classList.add('bi-heart-fill');

    heartDiv2.classList.remove('heart');
    heartDiv2.classList.add('heart-fill');
});

heartDiv2.addEventListener('mouseover', function(e) {
    if(icon2.classList==='bi-heart-fill'){
        if(e.target.classList==='heart'){
            heartDiv2.classList.remove('heart');
            heartDiv2.classList.add('heart-fill');
        }
        else{
            heartDiv2.classList.remove('heart-fill');
            heartDiv2.classList.add('heart');
        }
    }


});

