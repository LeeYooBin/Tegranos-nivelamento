function main(){
    const duracao = document.querySelector('#duracao');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => duracao.value =  '';

    calcBtn.addEventListener('click', e => {
        if(duracao.value){
            const horas = Math.floor(Number(duracao.value) / 3600);
            const minutos = Math.floor((Number(duracao.value) % 3600) / 60);
            const segundos = (Number(duracao.value) % 3600) % 60;

            result.innerHTML = `<p>${horas}:${minutos}:${segundos}</p>`;

            cleanInput();
        }
        e.preventDefault();
    });
}

main();