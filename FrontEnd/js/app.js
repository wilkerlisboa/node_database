let carrinho = [];
let total = 0;

document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();
  document.getElementById("finalizar").addEventListener("click", finalizarVenda);
});

function carregarProdutos() {
  fetch("produtos.php")
    .then(res => res.json())
    .then(produtos => {
      const lista = document.getElementById("lista-produtos");
      lista.innerHTML = "";
      produtos.forEach(p => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
          <div class="produto-card">
            <strong>${p.nome}</strong>
            <p>R$ ${p.preco.toFixed(2)}</p>
            <button class="btn btn-sm btn-success" onclick="adicionar(${p.id}, '${p.nome}', ${p.preco})">
              <i class="fas fa-plus"></i> Adicionar
            </button>
          </div>
        `;
        lista.appendChild(col);
      });
    });
}

function adicionar(id, nome, preco) {
  carrinho.push({ id, nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const ul = document.getElementById("carrinho");
  ul.innerHTML = "";
  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = item.nome;
    const span = document.createElement("span");
    span.textContent = `R$ ${item.preco.toFixed(2)}`;
    li.appendChild(span);
    ul.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarVenda() {
  fetch("vendas.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carrinho)
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
  });
}
