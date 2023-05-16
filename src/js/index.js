//1. Pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//2. Pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

//5.1 
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

//3. Identificar o clique do usuário no botão
botaoAlterarTema.addEventListener("click", () => {
    //6. Verificar se o body tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    //7. Remover a classe modo escuro do body
    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");

        //8. Colocar de volta a imagem do sol no botão
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        //4. Adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    //5. Trocar a imagem do botão para lua
    imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
})