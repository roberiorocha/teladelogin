const carrosselInterno = document.querySelector('.carrossel-interno');
const produtos = document.querySelectorAll('.produto');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

let posicao = 0;
const larguraProduto = produtos[0].offsetWidth + 40; // largura do produto + margem
const intervalo = 2000; // intervalo de tempo em milissegundos

// Selecionar os botões de adicionar ao carrinho
const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');

// Função para avançar automaticamente
function avancarAutomatico() {
  posicao++;
  if (posicao >= produtos.length - 3) {
    posicao = 0;
  }
  carrosselInterno.style.transform = `translateX(-${posicao * larguraProduto}px)`;
}

// Iniciar a rolagem automática
setInterval(avancarAutomatico, intervalo);

// Eventos para os botões
anterior.addEventListener('click', () => {
  if (posicao > 0) {
    posicao--;
    carrosselInterno.style.transform = `translateX(-${posicao * larguraProduto}px)`;
  }
});

proximo.addEventListener('click', () => {
  posicao++;
  if (posicao >= produtos.length - 3) {
    posicao = 0;
  }
  carrosselInterno.style.transform = `translateX(-${posicao * larguraProduto}px)`;
});

// Criar um array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarProdutoCarrinho(event) {
  const botao = event.target;
  const id = botao.getAttribute('data-id');
  const nome = botao.getAttribute('data-nome');
  const preco = parseFloat(botao.getAttribute('data-preco'));

  // Verificar se o produto já está no carrinho
  const produtoExistente = carrinho.find((produto) => produto.id === id);
  if (produtoExistente) {
    // Se o produto já está no carrinho, aumentar a quantidade
    produtoExistente.quantidade++;
  } else {
    // Se o produto não está no carrinho, adicionar um novo produto
    carrinho.push({
      id,
      nome,
      preco,
      quantidade: 1,
    });
  }

  // Atualizar o carrinho
  atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((produto) => {
    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${produto.nome} x ${produto.quantidade} = R$ ${(produto.preco * produto.quantidade).toFixed(2)}`;
    listaCarrinho.appendChild(itemCarrinho);
    total += produto.preco * produto.quantidade;
  });

  totalCarrinho.textContent = total.toFixed(2);
}

// Adicionar evento de clique nos botões de adicionar ao carrinho
botoesAdicionarCarrinho.forEach((botao) => {
  botao.addEventListener('click', adicionarProdutoCarrinho);
});
