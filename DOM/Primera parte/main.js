const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

//console.log(input.value);

console.log ({
    h1,
    p,
    parrafito,
    pid, 
    input,
});

h1.innerHTML = 'La vida es dura, <br> hay que trabajarlo.';

//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('rojo');

input.value ="456";

const img = document.createElement('img');
img.setAttribute('src', 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d621dbc9b1af4482b8740ac8da7439cf.jpg');

console.log(img);

pid.innerHTML = "";
pid.append(img);

