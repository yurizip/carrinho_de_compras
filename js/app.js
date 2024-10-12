let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
function adicionar(){
    let produto = document.getElementById('produto').value;
    let qtde = parseInt(document.getElementById('quantidade').value);
    if(!produto || produto.trim() === ''){
        alert('selecione um produto valido!');
        return;
    }
    if(isNaN(qtde) || qtde <= 0){
        alert('adicione uma quantidade!');
        return;
    }
    let nome_produto = produto.split('-')[0];
    let valor_produto = produto.split('R$')[1];
    verificar_inputs();
    let subtotal = qtde * valor_produto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtde}x</span> ${nome_produto}<span class="texto-azul">R$${subtotal}</span>
        </section>`

    total = total + subtotal;
    let campo_total = document.getElementById('valor-total');
    campo_total.textContent = `R$ ${total} `;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('lista-produtos').innerHTML = 'R$ 0';
    total = 0;
}

