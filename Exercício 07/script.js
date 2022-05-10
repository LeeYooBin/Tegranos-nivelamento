function main(){
    const distancia = document.querySelector('#distancia');
    const combustivel = document.querySelector('#combustivel');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        distancia.value = '';
        combustivel.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(distancia.value && combustivel.value){
            result.innerHTML = `<p>Consumo médio = ${(Number(distancia.value) / Number(combustivel.value)).toFixed(3)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();