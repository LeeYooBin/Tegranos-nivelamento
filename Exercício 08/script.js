function main(){
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => {
        a.value = '';
        b.value = '';
        c.value = '';
    };

    calcBtn.addEventListener('click', e => {
        if(a.value && b.value && c.value){
            result.innerHTML = `
            <p>
                ÁREA DO QUADRADO = ${(Number(a.value)**2).toFixed(4)}
                <br>
                ÁREA DO TRIÂNGULO = ${((Number(a.value) * Number(b.value))/2).toFixed(4)}
                <br>
                ÁREA DO TRAPÉZIO = ${((Number(a.value) + Number(b.value)) * Number(c.value) / 2).toFixed(4)} 
            </p>
            `;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();