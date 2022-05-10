function main(){
    const preco = document.querySelector('#preco');
    const quantidade = document.querySelector('#quantidade');
    const dinheiro = document.querySelector('#dinheiro');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () =>{
        preco.value = '';
        quantidade.value = '';
        dinheiro.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(preco.value && quantidade.value && dinheiro.value){
            result.innerHTML = `<p>TROCO = ${(Number(dinheiro.value) - (Number(preco.value) * Number(quantidade.value))).toFixed(2)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();