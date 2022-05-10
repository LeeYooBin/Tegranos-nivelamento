function main(){
    const escala = document.querySelector('#escala');
    const temperatura = document.querySelector('#temperatura');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        escala.value = '';
        temperatura.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(escala.value && temperatura.value){
            result.innerHTML = escala.value === 'C' ? `<p>Temperatura equivalente em Fahrenheit: ${(Number(temperatura.value) * 9 / 5 + 32).toFixed(2)}</p>`
                                                    : `<p>Temperatura equivalente em Celsius: ${((Number(temperatura.value) - 32) * 5 / 9).toFixed(2)}</p>`
            cleanInput();
        }
        e.preventDefault();
    });
}

main();