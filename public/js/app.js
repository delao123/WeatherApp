console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const city = document.querySelector('input');
const message_one = document.querySelector('#message-1');
const message_two = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city_name = city.value;

    message_one.textContent = "Loading....";
    message_two.textContent = " ";

    fetch('/weather?address=' + city_name).then((response) => {
        response.json().then((data) => {
            if(data.error){
                message_one.textContent = data.error;
            }else{
                message_one.textContent = data.location;
                message_two.textContent = data.forecast;
            }
        })
    })
});