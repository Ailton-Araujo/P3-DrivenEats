let nPrato, pPrato, nBebida, pBebida, nSobremesa, pSobremesa;
let pTotal = 0;

function ativarBotao() {
    if (document.querySelector(".pratos .selecionado") !== null
        && document.querySelector(".bebidas .selecionado") !== null
        && document.querySelector(".sobremesas .selecionado") !== null) {
        const botao = document.querySelector(".finalizar button");
        botao.removeAttribute("disabled");
        botao.classList.add("ativado");
        botao.innerHTML = "Fechar pedido";
    }
}

function seletorPrato(clicado) {
    const anterior = document.querySelector(".pratos .selecionado");
    if (anterior !== null) {
        anterior.classList.remove("selecionado");
    }
    clicado.classList.add("selecionado");
    nPrato = clicado.querySelector(".nome-item").innerHTML;
    pPrato = clicado.querySelector(".preco-item").innerHTML;
    ativarBotao();
}

function seletorBebida(clicado) {
    const anterior = document.querySelector(".bebidas .selecionado");
    if (anterior !== null) {
        anterior.classList.remove("selecionado");
    }
    clicado.classList.add("selecionado");
    nBebida = clicado.querySelector(".nome-item").innerHTML;
    pBebida = clicado.querySelector(".preco-item").innerHTML;
    ativarBotao();
}

function seletorSobremesa(clicado) {
    const anterior = document.querySelector(".sobremesas .selecionado");
    if (anterior !== null) {
        anterior.classList.remove("selecionado");
    }
    clicado.classList.add("selecionado");
    nSobremesa = clicado.querySelector(".nome-item").innerHTML;
    pSobremesa = clicado.querySelector(".preco-item").innerHTML;
    ativarBotao();
}

function confirmarPedido() {
const sobreposicao = document.querySelector(".sobrepor")
sobreposicao.classList.remove("escondido");

    const fechaPedido = document.querySelector(".confirmar-pedido");
    
    const dados = document.querySelector(".confirmar-pedido")
    console.log(dados)

    fechaPedido.querySelector(".pratoPedido").innerHTML = nPrato;
    fechaPedido.querySelector(".bebidaPedido").innerHTML = nBebida;
    fechaPedido.querySelector(".sobremesaPedido").innerHTML = nSobremesa;

    fechaPedido.querySelector(".pPratoPedido").innerHTML = pPrato;
    fechaPedido.querySelector(".pBebidaPedido").innerHTML = pBebida;
    fechaPedido.querySelector(".pSobremesaPedido").innerHTML = pSobremesa;

    pPratoOp = Number(pPrato.replace('R$ ', '').replace(',', '.'));
    pBebidaOp = Number(pBebida.replace('R$ ', '').replace(',', '.'));
    pSobremesaOp = Number(pSobremesa.replace('R$ ', '').replace(',', '.'));

    pTotal = (pPratoOp + pBebidaOp + pSobremesaOp).toFixed(2);
    pTotal = String(pTotal).replace('.', ',');
    fechaPedido.querySelector(".totalPedido").innerHTML = "R$ " + pTotal;


}

function fecharPedido() {
    const name = prompt("Digite o seu nome");
    const endereco = prompt("Digite o seu endereço");



    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato:  ` + nPrato + `
    - Bebida:  ` + nBebida + `
    - Sobremesa:  ` + nSobremesa + `
    Total: R$ ` + pTotal + `
    
    Nome: ` + name + `
    Endereço: ` + endereco;

    const mensagemWapp = encodeURIComponent(mensagem);
    console.log(mensagemWapp);
    window.open(`https://wa.me/+5562993190165?text=${mensagemWapp}`);
}

function cancelarPedido() {
    const cancelPedido = document.querySelector(".sobrepor");
    cancelPedido.classList.add("escondido");
}