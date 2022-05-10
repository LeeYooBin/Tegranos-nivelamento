function main(){
    const palavra = document.querySelector('#palavra');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => palavra.value = '';

    const palindroma = str => {
        let aux = [];
        for(let i = str.length - 1; i >= 0; i--) aux += str[i];
        return aux === str ? true : false;
    }

    calcBtn.addEventListener('click', e => {
        if(palavra.value){
            result.innerHTML = palindroma(palavra.value.toLowerCase()) ? `<p>É palíndroma.</p>` : `<p>Não é palíndroma.</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();