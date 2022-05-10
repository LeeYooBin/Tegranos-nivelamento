function main(){
    const minutos = document.querySelector('#minutos');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => minutos.value = '';

    calcBtn.addEventListener('click', e => {
        if(minutos.value){
            result.innerHTML = Number(minutos.value) <= 100 ? `<p>Valor a pagar: R$ 50.00</p>`
                               : `<p>Valor a pagar: R$ ${((Number(minutos.value) - 100) * 2 + 50).toFixed(2)}</p>`

            cleanInput();
        }
        e.preventDefault();
    });
}

main();