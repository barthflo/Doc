const sendButton = document.querySelector('.button-container button');

sendButton.addEventListener('click', event => {
    event.preventDefault();
    const car = document.getElementById('button-contact');
    const message = document.querySelector('form span');
    const button = document.querySelector('form button');

    
    button.classList.toggle('send');
    car.classList.toggle('car-moving');
    message.classList.toggle('hidden');

    car.addEventListener('animationend', () => {
        car.classList.remove('car-moving');
        button.classList.remove('send');
    })
      
});

// const validateForm = () =>