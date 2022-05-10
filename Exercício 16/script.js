function main(){
    const input = document.querySelector('#input');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => input.value = '';

    calcBtn.addEventListener('click', e => {
        if(input.value){
            const distancias = input.value.replace(/[\n]/g, ' ').split(' ').map(distancia => Number(distancia));
            result.innerHTML = `<p>MAIOR DISTÂNCIA = ${Math.max(distancias[0],distancias[1],distancias[2])}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();