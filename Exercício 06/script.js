function main(){
    const nome = document.querySelector('#nome');
    const valor = document.querySelector('#valor');
    const horas = document.querySelector('#horas');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        nome.value = '';
        valor.value = '';
        horas.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(nome.value && valor.value && horas.value){
            result.innerHTML = `<p>O pagamento para ${nome.value} deve ser ${(Number(valor.value) * Number(horas.value)).toFixed(2)}</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();