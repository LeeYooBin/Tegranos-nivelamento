function main(){
    const data = document.querySelector('#data');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => data.value = '';

    const signo = (dia, mes) => {
        switch(mes){
            case 1:
                if(dia >= 21) return 'Aquário';
                return 'Capricórnio';
            case 2:
                if(dia >= 19) return 'Peixes'
                return 'Aquário';
            case 3:
                if(dia >= 21) return 'Áries';
                return 'Peixes';
            case 4:
                if(dia >= 21) return 'Touro';
                return 'Áries';
            case 5:
                if(dia >= 21) return 'Gêmeos';
                return 'Touro';
            case 6:
                if(dia >= 21) return 'Câncer';
                return 'Gêmeos';
            case 7:
                if(dia >= 23) return 'Leão';
                return 'Câncer';
            case 8:
                if(dia >= 23) return 'Virgem';
                return 'Leão';
            case 9:
                if(dia >= 23) return 'Libra';
                return 'Virgem';
            case 10:
                if(dia >= 23) return 'Escorpião';
                return 'Libra';
            case 11:
                if(dia >= 22) return 'Sagitário';
                return 'Escorpião';
            case 12:
                if(dia >= 22) return 'Capricórnio';
                return 'Sagitário';
        }
    }

    calcBtn.addEventListener('click', e => {
        if(data.value){
            const aux = data.value.split('/').map(num => Number(num));
            const dia = aux[0];
            const mes = aux[1];
            result.innerHTML = `Signo: ${signo(dia, mes)}`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();