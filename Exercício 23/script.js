function main(){
    const input = document.querySelector('#input');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => input.value = '';

    calcBtn.addEventListener('click', e => {
        if(input.value){
            const numeros = input.value.replace(/[\n]/g, ' ').split(' ').map(numero => Number(numero)).sort((a, b) => a - b);
            let soma = 0;
            for(let i = numeros[0] + 1; i < numeros[1]; i++) if(i % 2 > 0) soma += i;
            result.innerHTML = `<p>SOMA DOS ÍMPARES = ${soma}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();