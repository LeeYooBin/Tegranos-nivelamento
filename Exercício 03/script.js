function main(){
    const nome1 = document.querySelector('#nome1');
    const idade1 = document.querySelector('#idade1');
    const nome2 = document.querySelector('#nome2');
    const idade2 = document.querySelector('#idade2');
    const sendButton = document.querySelector('#sendButton');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        nome1.value = ''
        idade1.value = ''
        nome2.value = ''
        idade2.value = ''
    };

    sendButton.addEventListener('click', e => {
        if(nome1.value && idade1.value && nome2.value && idade2.value){
            result.innerHTML = `<p>A idade média de ${nome1.value} e ${nome2.value} é de 
                                ${((Number(idade1.value) + Number(idade2.value))/2).toFixed(1)}</p>`;
            
            cleanInput();
        }
        e.preventDefault();
    });
}

main();