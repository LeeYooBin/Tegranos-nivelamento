function main(){
    const numero = document.querySelector('#numero');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => numero.value = '';

    const unidades = {
        1: 'Um',
        2: 'Dois',
        3: 'Três',
        4: 'Quatro',
        5: 'Cinco',
        6: 'Seis',
        7: 'Sete',
        8: 'Oito',
        9: 'Nove'
    }
    
    const dezenas = {
        10: 'Dez',
        11: 'Onze',
        12: 'Doze',
        13: 'Treze',
        14: 'Quatorze',
        15: 'Quinze',
        16: 'Dezesseis',
        17: 'Dezessete',
        18: 'Dezoito',
        19: 'Dezenove',
        20: 'Vinte',
        30: 'Trinta',
        40: 'Quarenta',
        50: 'Cinquenta',
        60: 'Sessenta',
        70: 'Setenta',
        80: 'Oitenta',
        90: 'Noventa'
    }

    calcBtn.addEventListener('click', e => {
        if(numero.value){
            if(numero.value.length === 1) result.innerHTML = `<p>${unidades[numero.value]}.</p>`;
            else{
                if(numero.value[0] == 1 || numero.value[1] == 0) result.innerHTML = `<p>${dezenas[numero.value]}.</p>`;
                else result.innerHTML = `<p>${dezenas[numero.value[0] + '0']} e ${unidades[numero.value[1]].toLowerCase()}.</p>`;
            }
            cleanInput();
        }
        e.preventDefault();
    });

}

main();