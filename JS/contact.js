const form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const car = document.getElementById('button-contact');
    const message = document.querySelector('form span');
    const button = document.querySelector('form button');

    message.classList.add('hidden');

    button.classList.toggle('send');
    car.classList.toggle('car-moving');
    message.classList.toggle('hidden');

    car.addEventListener('animationend', () => {
        car.classList.remove('car-moving');
        button.classList.remove('send');
        message.classList.remove('hidden');
    }) 
    document.querySelectorAll('.form input').forEach(input => input.value = "");
    document.querySelector("textarea").value = "";  
});

// const validateForm = () =>