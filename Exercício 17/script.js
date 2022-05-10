function main(){
    const input = document.querySelector('#input');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => input.value = '';

    calcBtn.addEventListener('click', e => {
        if(input.value){
            const numeros = input.value.replace(/[\n]/g, ' ').split(' ').map(numero => Number(numero)).sort((a, b) => a - b);
            result.innerHTML = numeros[1] % numeros[0] === 0 ? `<p>São múltiplos</p>` : `<p>Não são múltiplos</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();