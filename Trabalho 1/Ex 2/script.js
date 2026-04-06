const form = document.getElementById('calc_form');
const res = document.getElementById('inplResCalc');
const botao = document.getElementById('btnCalcular');
const inpNumero1 = document.getElementById('inpNumero1');
const inpNumero2 = document.getElementById('inpNumero2');

function validarInput(element) 
{
    let input = element;
    let value = input.value;

    // Regex que rejeita/não permite a digitação de caracteres que não sejam 
    // números, vírgula, ponto ou sinal de menos no começo da string
    value = value.replace(/[^\d,.-]/g, "")          // allow digits, -, , .
                 .replace(/(?!^)-/g, "")            // only one - at start
                 .replace(/([.,].*)[.,]/g, "$1");   // only one decimal separator

    input.value = value;
}

function validarInput2(event)
{
    if (inpNumero1.value === "Digite um número") inpNumero1.value = "";
    if (inpNumero2.value === "Digite um número") inpNumero2.value = "";
}

inpNumero1.addEventListener('focus', function()
{
    if (inpNumero1.value === "Digite um número") inpNumero1.value = "";
});

inpNumero2.addEventListener('focus', function()
{
    if (inpNumero2.value === "Digite um número") inpNumero2.value = "";
});

botao.addEventListener('mouseenter', validarInput2);
botao.addEventListener('focus', validarInput2);

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    const num1val = Number(document.getElementById('inpNumero1').value.replace(',','.'));
    const num2val = Number(document.getElementById('inpNumero2').value.replace(',','.'));

    let calcRes = 0;

    const inpOperacao = document.querySelector('input[name="calc"]:checked');

    switch(inpOperacao.value) 
    {
        case 'Soma':
            calcRes = num1val + num2val;
        break;
        case 'Subtracao':
            calcRes = num1val - num2val;
        break;
        case 'Multiplicacao':
            calcRes = num1val * num2val;
        break;
        case 'Dividir':
            calcRes = num1val / num2val;
        break;
        default:
            calcRes = 0;
    }

    /*
    const inpRdSoma = document.getElementById('rdSoma');
    const inpRdSubtracao = document.getElementById('rdSubtracao');
    const inpRdMultiplicacao = document.getElementById('rdMultiplicacao');
    const inpRdDivisao = document.getElementById('rdDividir');

    if (inpRdSoma.checked)
    {
        calcRes = num1val + num2val;
    }

    if (inpRdSubtracao.checked)
    {
        calcRes = num1val - num2val;
    }

    if (inpRdMultiplicacao.checked)
    {
        calcRes = num1val * num2val;
    }

    if (inpRdDivisao.checked)
    {
        calcRes = num1val / num2val;
    }
    */

    if (calcRes == "Infinity") 
        res.value = "Erro! Não é possível dividir por zero!";
    else 
        res.value = calcRes.toFixed(2);

    document.getElementById('rdSoma').checked = true;
    inpNumero1.value = "";
    inpNumero2.value = "";
    inpNumero1.focus();

    console.log(num1val, num2val, inpOperacao.value, calcRes);
});