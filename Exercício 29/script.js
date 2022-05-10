function main(){
    const cnpj = document.querySelector('#cnpj');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => cnpj.value = '';

    const valida = (cnpj) => {
        const aux = cnpj.split('-');
        const num = aux[0].match(/[0-9]/g).map(numero => Number(numero));
        const seq = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let calculo = 0;

        for(let i = 0; i < num.length; i++) calculo += (num[i] * seq[i]);
        if(calculo % 11 < 2) num.push(0);
        else num.push(11 - (calculo % 11));

        seq.unshift(6);
        calculo = 0;

        for(let i = 0; i < num.length; i++) calculo += (num[i] * seq[i]);
        if(calculo % 11 < 2) num.push(0);
        else num.push(11 - (calculo % 11));

        return num.join('') == cnpj.match(/[0-9]/g).join('') ? 'Válido' : 'Inválido';
    };

    calcBtn.addEventListener('click', e => {
        if(cnpj.value){
            result.innerHTML = `<p>${valida(cnpj.value)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });

}

main();