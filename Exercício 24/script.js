function main(){
    const input = document.querySelector('#input');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => input.value = '';

    calcBtn.addEventListener('click', e => {
        if(input.value){
            const numeros = input.value.replace(/[' ']/g, '').split(',').map(num => Number(num)).sort((a, b) => a - b);
            let aux = '';
            for(let i of numeros) aux += `${i}, `;
            result.innerHTML = `<p>Ordenados: ${aux.slice(0, -2)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();