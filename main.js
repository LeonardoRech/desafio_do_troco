//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValor = e.target.querySelector('#valor');
    
    //conferir se o valor é um número
    const valor = Number(inputValor.value);
    if (!valor){ 
        setResultado('Valor inválido', false);
        return;
    }

    const saque = getSaque(valor);

    const msg = saque;

    setResultado(msg, true);
});

//função calculo de notas do saque
function getSaque(valor) {
    const notas100 = valor / 100;
    const qtd100 = Math.floor(notas100);

    let resto = valor % 100;
    const notas50 = resto / 50;
    const qtd50 = Math.floor(notas50);

    let resto1 = valor % 50;
    const notas10 = resto1 / 10;
    const qtd10 = Math.floor(notas10);

    let resto2 = valor % 10;
    const notas5 = resto2 / 5;
    const qtd5 = Math.floor(notas5);

    let resto3 = valor % 5;
    const notas1 = resto3 / 1;
    const qtd1 = Math.floor(notas1);

    const dinheiro = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);
    const saque = `O valor do saque é: ${dinheiro}. Você receberá: <br/> ${qtd100} nota(s) de R$ 100; <br/> ${qtd50} nota(s) de R$ 50; <br/> ${qtd10} nota(s) de R$ 10; <br/> ${qtd5} nota(s) de R$ 5; <br/> ${qtd1} nota(s) de R$ 1.`
    return saque;
}

//criar a mensagem
function criaP() {
    const p = document.createElement('p');
    return p;
}

//inserir a mensagem no paragrafo
function setResultado (msg, isValid) {
    //selecionando a div #resultado e inserindo a tag p
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    //cor do paragrafo
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    //inserindo a mensagem no paragrafo
    p.innerHTML = msg;
    resultado.appendChild(p)
}
