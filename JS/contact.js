const form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const car = document.getElementById('button-contact');
    const message = document.querySelector('form span');
    const button = document.querySelector('form button');

    message.classList.remove('hidden');

    if(document.querySelector('textarea').value != ""){
        document.querySelector('textarea').value = "";
    }

    button.classList.toggle('send');
    car.classList.toggle('car-moving');
    message.classList.toggle('hidden');

    car.addEventListener('animationend', () => {
        car.classList.remove('car-moving');
        button.classList.remove('send');
    }) 
    document.querySelectorAll('.form input').forEach(input => input.value = "");
    document.querySelector("text").value = "";  
});

// const validateForm = () =>