function validarInput(element) 
{
    let inputVal = element;

    let varVal = parseFloat(inputVal.value);

    inputVal.value = inputVal.value.replace(/[^0-9.,]/g, '');

    if (varVal > 10) inputVal.value = 10;
    if (varVal < 0) inputVal.value = 0;
}

const botao = document.getElementById('btnCalcular');
const form = document.getElementById('calc_form');
const res = document.getElementById('inpResMedia');

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    const num1 = document.getElementById('inpNota1');
    const num2 = document.getElementById('inpNota2');
    const num3 = document.getElementById('inpNota3');

    const num1val = Number(document.getElementById('inpNota1').value.replace(',','.'));
    const num2val = Number(document.getElementById('inpNota2').value.replace(',','.'));
    const num3val = Number(document.getElementById('inpNota3').value.replace(',','.'));

    let media = ((num1val + num2val + num3val) / 3);

    res.value = media.toFixed(2);

    num1.value = "";
    num2.value = "";
    num3.value = "";
    num1.focus();

    console.log(num1val, num2val, num3val, media);
});