function main(){
    const preco = document.querySelector('#preco');
    const quantidade = document.querySelector('#quantidade');
    const dinheiro = document.querySelector('#dinheiro');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        preco.value = '';
        quantidade.value = '';
        dinheiro.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(preco.value && quantidade.value && dinheiro.value){
            const troco = Number(dinheiro.value) - (Number(quantidade.value) * Number(preco.value));
            result.innerHTML = troco >= 0 ? `<p>TROCO = ${troco.toFixed(2)}</p>`
                               : `<p>DINHEIRO INSUFICIENTE. FALTAM ${Math.abs(troco).toFixed(2)} REAIS</p>`;
                               
            cleanInput();
        }
        e.preventDefault();
    });
}

main();