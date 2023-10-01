



/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/
// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

       
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");    
        personagens[index].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

