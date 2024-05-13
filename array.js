
// let pessoa = {
//     nome: '',
//     idade: 0,
//     profissao: ''
// };


// pessoa.nome = 'João';
// pessoa.idade = 25;
// pessoa.profissao = 'Engenheiro';


// console.log(pessoa.nome);


// pessoa.nome = 'Maria';

// pessoa.cidade = 'São Paulo';


// delete pessoa.profissao;

// console.log(pessoa);


// // exercicio 2
// let produto1 = {
//     nome: "Smartphone XYZ",
//     preco: 999.99,
//     descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
//     imagem: "caminho/para/imagem1.jpg",
//     disponivel: true,
//     avaliacao: 4.5,
//     caracteristicas: ["Tela de 6 polegadas", "Memória interna de 128GB", "Câmera principal de 48MP"],
//     tags: ["tecnologia", "smartphone", "eletrônicos"],
//     imprimirCaracteristicas: function () {
//         console.log("Características: " + this.caracteristicas.join(", "));
//     },
//     imprimirTags: function () {
//         console.log("Tags: " + this.tags.join(", "));
//     }
// };


// produto1.imprimirCaracteristicas();
// produto1.imprimirTags();


// let produto2 = {
//     nome: "Laptop ABC",
//     preco: 1599.99,
//     descricao: "Laptop potente com grande capacidade de armazenamento e bateria de longa duração.",
//     imagem: "caminho/para/imagem2.jpg",
//     disponivel: true,
//     avaliacao: 4.8,
//     caracteristicas: ["Tela de 15 polegadas", "SSD de 512GB", "Processador Intel Core i7"],
//     tags: ["tecnologia", "laptop", "computadores"],
//     imprimirCaracteristicas: function () {
//         console.log("Características: " + this.caracteristicas.join(", "));
//     },
//     imprimirTags: function () {
//         console.log("Tags: " + this.tags.join(", "));
//     }
// };

// let produto3 = {
//     nome: "Fone de Ouvido DEF",
//     preco: 199.99,
//     descricao: "Fones de ouvido com cancelamento de ruído e som de alta qualidade.",
//     imagem: "caminho/para/imagem3.jpg",
//     disponivel: false,
//     avaliacao: 4.2,
//     caracteristicas: ["Bluetooth", "Bateria de longa duração", "Design ergonômico"],
//     tags: ["tecnologia", "áudio", "acessórios"],
//     imprimirCaracteristicas: function () {
//         console.log("Características: " + this.caracteristicas.join(", "));
//     },
//     imprimirTags: function () {
//         console.log("Tags: " + this.tags.join(", "));
//     }
// };

// let produto4 = {
//     nome: "Tablet GHI",
//     preco: 399.99,
//     descricao: "Tablet com tela sensível ao toque e suporte para caneta stylus.",
//     imagem: "caminho/para/imagem4.jpg",
//     disponivel: true,
//     avaliacao: 4.3,
//     caracteristicas: ["Tela de 10 polegadas", "Suporte para caneta", "Conexão Wi-Fi"],
//     tags: ["tecnologia", "tablet", "gadgets"],
//     imprimirCaracteristicas: function () {
//         console.log("Características: " + this.caracteristicas.join(", "));
//     },
//     imprimirTags: function () {
//         console.log("Tags: " + this.tags.join(", "));
//     }
// };


// let listaDeProdutos = [produto1, produto2, produto3, produto4];


// listaDeProdutos.forEach(produto => {
//     console.log("Produto: " + produto.nome);
//     console.log("Preço: R$ " + produto.preco);
//     console.log("Descrição: " + produto.descricao);
//     console.log("Avaliação: " + produto.avaliacao);
//     console.log("Disponível: " + (produto.disponivel ? "Sim" : "Não"));
//     produto.imprimirCaracteristicas();
//     produto.imprimirTags();
//     console.log("_______________");
// });


//exercicio 3

// //function Produto(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags) {
//     this.nome = nome;
//     this.preco = preco;
//     this.descricao = descricao;
//     this.imagem = imagem;
//     this.disponivel = disponivel;
//     this.avaliacao = avaliacao;
//     this.caracteristicas = caracteristicas;
//     this.tags = tags;


//     let produto = new Produto("xiaomi", 1000, "Smartphone 1 linha", "imagem.png", true, 4.5, ["azul", "64GB", "8 gb ram"], ["tecnologia", "telefone", "modelo novo"]);

//     console.log(produto);

//     this.imprimeTags = function () {
//         this.tags.forEach((currentTag))=> { //arrow function
//             console.log(currentTag);
//         };

//     }*/

    // exercicio 5

    function Carro(cor, marca, modelo, avaliacao) {
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.avaliacao = avaliacao;

        this.imprimeAvaliacao = function () {
            if (this.avaliacao >= 3) {
                console.log(this.avaliacao);
                console.log(this.modelo);
            }

       
        }

        
    }
    let fusca = new Carro("Preto", "Volkswagen", "Fusca", 4);
    let Up = new Carro("Azul", "Volkswagen", "UP TSI", 1);
    let Peugeot = new Carro("Amarelo", "Peugeot", "308", 5);
    let Gol = new Carro("Azul", "Volkswagen", "Gol Bola", 2);
    let Nissan = new Carro("Amarelo", "Nissan", "Frontier", 10);

fusca.imprimeAvaliacao();
Up.imprimeAvaliacao();
Peugeot.imprimeAvaliacao();
Gol.imprimeAvaliacao();
Nissan.imprimeAvaliacao();



    



