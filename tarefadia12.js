function Product(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
  }
  function createHtmlCard(product) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${product.imagem}" class="card-img-top" alt="${product.nome}">
          <div class="card-body">
            <h5 class="card-title">${product.nome}</h5>
            <p class="card-text">${product.descricao}</p>
            <p class="card-text">Preço: R$ ${product.preco.toFixed(2)}</p>
            <p class="card-text">Disponível: ${product.disponivel ? "Sim" : "Não"}</p>
            <p class="card-text">Avaliação: ${product.avaliacao} estrelas</p>
            <ul class="list-group list-group-flush">
              ${product.caracteristicas.map(c => `<li class="list-group-item">${c}</li>`).join("")}
            </ul>
          </div>
          <div class="card-footer">
            ${product.tags.map(t => `<span class="badge bg-secondary">${t}</span>`).join(" ")}
          </div>
        </div>
      </div>
    `;
  }
  function generateCardList(cards) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 
  
    const row = document.createElement("div");
    row.classList.add("row");
  
    cards.forEach(product => {
      const cardHtml = createHtmlCard(product);
      row.innerHTML += cardHtml;
    });
  
    productList.appendChild(row);
  }
      
  

const produtos = [
    new Product("Smartphone XYZ", 999.99, "...", "img/imagemtelefone.jpg", true, 4.5, ["Tela de 6 polegadas", "128GB", "Câmera 48MP"], ["tecnologia", "smartphone", "eletrônicos"]),
    new Product("Smartphone XYZ", 999.99, "...", "img/imagemtelefone.jpg", true, 4.5, ["Tela de 6 polegadas", "128GB", "Câmera 48MP"], ["tecnologia", "smartphone", "eletrônicos"]),
    new Product("Smartphone XYZ", 999.99, "...", "img/imagemtelefone.jpg", true, 4.5, ["Tela de 6 polegadas", "128GB", "Câmera 48MP"], ["tecnologia", "smartphone", "eletrônicos"]),
  ];
  
  generateCardList(produtos);
  