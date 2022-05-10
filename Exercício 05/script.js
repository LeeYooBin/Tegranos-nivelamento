function main(){
    const raio = document.querySelector('#raio');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => raio.value = '';

    calcBtn.addEventListener('click', e => {
        if(raio.value){
            result.innerHTML = `<p>ÁREA = ${(Math.PI * Number(raio.value)**2).toFixed(3)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();