function main(){
    const nota1 = document.querySelector('#nota1');
    const nota2 = document.querySelector('#nota2');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        nota1.value = ''
        nota2.value = ''
    };

    calcBtn.addEventListener('click', e => {
        if(nota1.value && nota2.value){
            const notaFinal = Number(nota1.value) + Number(nota2.value);
            result.innerHTML = `<p>NOTA FINAL = ${notaFinal.toFixed(1)}</p>`;
            result.innerHTML += notaFinal < 60 ? `<p>REPROVADO</p>` : `<p>APROVADO</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();