const produtos =[
    {nome: "Produto 1", preco : 10.00, image: "/imagem/Produto 1.jpg"},
    {nome: "Produto 1", preco : 10.00, image: "/imagem/Produto 2.png"},
    {nome: "Produto 1", preco : 10.00, image: "/imagem/Produto 4.jpg"}
];

const carrinho = [];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

//funçao para exibir produtos na tela
function exibirprodutos(){
    produtos.forEach(produto =>{
        produtosDiv.classList.add("produtos");
        produtosDiv.innerHTML `
        <img src ="${produto.imagem}" alt="${produto.nome}>
        <h3>${produto.nome}<h3>
        <p>Preço: R$ ${produto.preço.tofixed(2)}</p>
        <button onclick="adcionandoAoCarinho('${produto.name}', ${produto.preço})">
        `;
    })
}

//função para Adcionar um produto ao carrinho
function adicionarCarrinho(nome, preco){
    carrinho.push({nome, preco});
    atualizarCarrinho();

}

//função pra atualizar a exibição do carrinho e o total
function atualizarCarrinho(){
    carrinhoLista.innerHTML= "";
    let total = 0;
    carrinho.forEach(item =>{
        const itemLista = document.createElement("li");
        itemLista.textContent =`${item.nome}- R$ ${item.preco.tofixed(2)}` ;
        carrinhoLista.appendChild(itemLista);
        total += item.preco
        
    });
    totalSpan.textContent = `total: R$ ${total.tofixed(2)}`;

}
//Inicializar a exibibição dos produtos
exibirprodutos();
