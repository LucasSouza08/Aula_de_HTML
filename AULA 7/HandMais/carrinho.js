const botoes = document.querySelectorAll(".add-carrinho");
const listaCarrinho = document.getElementById("lista-carrinho");
const total = document.getElementById("total");
const finalizar = document.getElementById("finalizar");

let carrinho = [];
let valorTotal = 0;

// Adicionar item ao carrinho
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const nome = botao.getAttribute("data-nome");
    const preco = parseFloat(botao.getAttribute("data-preco"));

    carrinho.push({ nome, preco });
    valorTotal += preco;

    atualizarCarrinho();
  });
});

// Atualizar visualização do carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} 
      <button onclick="removerItem(${index})">❌</button>`;
    listaCarrinho.appendChild(li);
  });
  total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
}

// Remover item do carrinho
function removerItem(index) {
  valorTotal -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// Finalizar compra
finalizar.addEventListener("click", () => {
  if (carrinho.length === 0) }
    alert("Seu carrinho está vazio!");
