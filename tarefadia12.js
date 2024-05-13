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
      <div class="card">
        <img src="${product.imagem}" alt="${product.nome}">
        <h2>${product.nome}</h2>
        <p>Preço: R$ ${product.preco.toFixed(2)}</p>
        <p>${product.descricao}</p>
        <p>Disponível: ${product.disponivel ? "Sim" : "Não"}</p>
        <p>Avaliação: ${product.avaliacao} estrelas</p>
        <h3>Características:</h3>
        <ul>
          ${product.caracteristicas.map(c => `<li>${c}</li>`).join("")}
        </ul>
        <h3>Tags:</h3>
        <ul>
          ${product.tags.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  function generateCardList(cards) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 
  
    cards.forEach(product => {
      const cardHtml = createHtmlCard(product);
      productList.innerHTML += cardHtml;
    });
  }

const produtos = [
    new Product("Smartphone XYZ", 999.99, "...", "img/imagemtelefone.jpg", true, 4.5, ["Tela de 6 polegadas", "128GB", "Câmera 48MP"], ["tecnologia", "smartphone", "eletrônicos"]),
    
  ];
  
  generateCardList(produtos);
  