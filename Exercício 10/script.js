function main(){
    const valor1 = document.querySelector('#valor1');
    const valor2 = document.querySelector('#valor2');
    const valor3 = document.querySelector('#valor3');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        valor1.value = '';
        valor2.value = '';
        valor3.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(valor1.value && valor2.value && valor3.value){
            result.innerHTML = `<p>MENOR = ${Math.min(Number(valor1.value), Number(valor2.value), Number(valor3.value))}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();