function main(){
    const num = document.querySelector('#num');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => num.value = '';

    calcBtn.addEventListener('click', e => {
        if(num.value){
            let aux = '';
            for(let i = 1; i <= Number(num.value); i++){
                if(i % 2 === 0) aux += `<p>${i}</p>`;
            }
            result.innerHTML = aux;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();