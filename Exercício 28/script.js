function main(){
    const input = document.querySelector('#input');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => input.value = '';

    calcBtn.addEventListener('click', e => {
        if(input.value){
            const valores = input.value.replace(/[' ']/g, '').split(',').map(num => Number(num)).sort((a, b) => a - b);
            result.innerHTML = `<p>Saída: ${valores[0]} e ${valores[valores.length - 1]}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();