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

    const calcDelta = (a, b, c) => b**2 - 4 * a * c;
    const calcX1 = (b, a, delta) => ((-b + Math.sqrt(delta)) / (2 * a))
    const calcX2 = (b, a, delta) => ((-b - Math.sqrt(delta)) / (2 * a))
    
    calcBtn.addEventListener('click', e => {
        if(a.value && b.value && c.value){
            const delta = calcDelta(Number(a.value), Number(b.value), Number(c.value));
            result.innerHTML = delta >= 0 ? `<p>
                                                X1 = ${(calcX1(Number(b.value), Number(a.value), delta)).toFixed(4)}
                                                <br>
                                                X2 = ${(calcX2(Number(b.value), Number(a.value), delta)).toFixed(4)}
                                            </p>`
                                          : `<p>Esta equação não possui raízes reais</p>`;
            
            cleanInput();
        }
        e.preventDefault();
    });
}

main();