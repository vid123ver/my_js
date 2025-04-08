const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);    //take empty value if put outside event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;

    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = '';
        if (bmi <= 18.6) {
            message = "Under Weight‼️";
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            message = "Normal Weight✅";
        }
        else {
            message = "Over Weight‼️";
        }
        result.innerHTML = `<span>your bmi is ${bmi} <br> <strong>${message}</strong></span>`
    }
})
