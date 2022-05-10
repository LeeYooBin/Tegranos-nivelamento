function main(){
    const base = document.querySelector('#base');
    const altura = document.querySelector('#altura');
    const calcButton = document.querySelector('#calcButton');
    const result = document.querySelector('#result');

    const limpaInputs = () =>{
        base.value = ''
        altura.value = ''
    };
    

    calcButton.addEventListener('click', e => {
        if(base.value && altura.value){
            const area = (Number(base.value) * Number(altura.value)).toFixed(4);
            const perimetro = (Number(base.value) * 2 + Number(altura.value) * 2).toFixed(4);
            const diagonal = (Math.sqrt(Number(base.value)**2 + Number(altura.value)**2)).toFixed(4);
            
            result.innerHTML = `<p>
                                        ÁREA = ${area}
                                        <br>
                                        PERÍMETRO = ${perimetro}
                                        <br>
                                        DIAGONAL = ${diagonal}
                                </p>`;
            
            limpaInputs();
        }
        e.preventDefault();
    });

}
main();