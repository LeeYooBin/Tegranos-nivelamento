function main(){
    const num = document.querySelector('#num');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => num.value = '';

    calcBtn.addEventListener('click', e => {
        if(num.value){
            let aux = '';
            for(let i = 1; i <= 10; i++) aux += `<p>${num.value} x ${i} = ${Number(num.value) * i}</p>`;
            result.innerHTML = aux;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();