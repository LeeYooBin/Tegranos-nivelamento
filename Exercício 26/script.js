function main(){
    const palavra = document.querySelector('#palavra');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => palavra.value = '';

    calcBtn.addEventListener('click', e => {
        if(palavra.value){
            const aux = palavra.value.split('');
            let vogal = 0;
            let consoante = 0;
            for(let letter of aux){
                if('aeiou'.includes(letter.toLowerCase())) vogal += 1;
                else consoante += 1;
            }
            result.innerHTML = `<p>
                                    Vogais: ${vogal}
                                    <br>
                                    Consoantes: ${consoante}
                                </p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();