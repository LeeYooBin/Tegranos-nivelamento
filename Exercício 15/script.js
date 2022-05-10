function main(){
    const glicose = document.querySelector('#glicose');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => glicose.value = '';

    calcBtn.addEventListener('click', e => {
        if(glicose.value){
            result.innerHTML = Number(glicose.value) <= 100 ? `<p>Normal</p>`
                               : Number(glicose.value) > 100 && Number(glicose.value) <= 140 ? `<p>Elevado</p>`
                               : `<p>Diabetes</p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();