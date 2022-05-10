function main(){
    const inicial = document.querySelector('#inicial');
    const final = document.querySelector('#final');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        inicial.value = '';
        final.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(inicial.value && final.value){
            let soma = 0;
            for(let i = Number(inicial.value); i <= Number(final.value); i++) soma += i;
            result.innerHTML = `<p>Resultado = ${soma}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();