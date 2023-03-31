let nPrato, pPrato, nBebida, pBebida, nSobremesa, pSobremesa;
let precoTotal = 0;

function ativarBotao(){
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

function fecharPedido() {
    const name = prompt("Digite o seu nome");
    const endereco = prompt("Digite o seu endereço");

    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato:  ` + nPrato + `
    - Bebida:  ` + nBebida + `
    - Sobremesa:  ` + nSobremesa + `
    Total: R$ ` + precoTotal + `
    
    Nome: ` + name + `
    Endereço: ` + endereco;

const mensagemWapp = encodeURIComponent(mensagem);
console.log(mensagemWapp);
//mudar depois
window.open(`https://wa.me/+5562993190165?text=${mensagemWapp}`);
}