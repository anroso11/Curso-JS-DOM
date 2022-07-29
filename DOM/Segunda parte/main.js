const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btncalcularSu = document.querySelector("#btnCalcularSu");
const btncalcularRe = document.querySelector("#btnCalcularRe");
const btncalcularMu = document.querySelector("#btnCalcularMu");
const btncalcularDi = document.querySelector("#btnCalcularDi");
const btnreseteo = document.querySelector("#reset");
const limpiarBorrar = document.querySelector("#operaciones-form");

btncalcularSu.addEventListener('click', calcularSumar);
btncalcularRe.addEventListener('click', calcularResta);
btncalcularMu.addEventListener('click', calcularMultiplicacion);
btncalcularDi.addEventListener('click', calcularDivision);
btnreseteo.addEventListener('click', borrarForm);

function calcularSumar () {
    const sumar = parseInt(input1.value) +  parseInt(input2.value);
    resultado.innerText = `El resultado de la suma es: ${sumar}`;
}

function calcularResta () {
    const resta = parseInt(input1.value) -  parseInt(input2.value);
    resultado.innerText = `El resultado de la resta es: ${resta}`;
}

function calcularMultiplicacion () {
    const multiplicación = parseInt(input1.value) *  parseInt(input2.value);
    resultado.innerText = `El resultado de la multiplicación es: ${multiplicación}`;
}

function calcularDivision () {
    const division = parseInt(input1.value) /  parseInt(input2.value);
    resultado.innerText = `El resultado de la division es: ${division}`;
}

function borrarForm () {
    input1.value = "";
    input2.value = "";
    resultado.innerHTML = "";
}






