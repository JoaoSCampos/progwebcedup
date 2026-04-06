const form = document.getElementById('calc_form');
const res = document.getElementById('inplResCalc');
const botao = document.getElementById('btnCalcular');
const inpNumero1 = document.getElementById('inpNumero1');

function calcularFatorial(numero)
{
    let vlrFatorial = 1;

    for (let n = 2; n < numero + 1; n++)
    {
        vlrFatorial = vlrFatorial * n;
    }

    return vlrFatorial;
}

function validarInput(element) 
{
    let inputVal = element;

    let varVal = parseFloat(inputVal.value);

    inputVal.value = inputVal.value.replace(/[^0-9]/g, '');

    if (varVal > 20) inputVal.value = 20;
    if (varVal < 1) inputVal.value = 1;
}

function validarInput2(event)
{
    if (inpNumero1.value === "Digite um número") inpNumero1.value = "";
}

botao.addEventListener('mouseenter', validarInput2);
botao.addEventListener('focus', validarInput2);
inpNumero1.addEventListener('focus', validarInput2);

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    const num1val = Number(document.getElementById('inpNumero1').value);

    let calcRes = calcularFatorial(num1val);

    res.value = calcRes.toFixed(0);

    inpNumero1.value = "";
    inpNumero1.focus();

    console.log(num1val, calcRes);
});