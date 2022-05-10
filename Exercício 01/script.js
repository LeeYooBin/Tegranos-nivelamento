function main() {
    const largura = document.querySelector('#largura');
    const comprimento = document.querySelector('#comprimento');
    const valor = document.querySelector('#valor');
    const calcButton = document.querySelector('#calcButton');
    const result = document.querySelector('#result');

    const limpaInputs = () =>{
        largura.value = ''
        comprimento.value = ''
        valor.value = ''
    };

    calcButton.addEventListener('click', e => {
        if(largura.value && comprimento.value && valor.value){
            const area = (Number(largura.value) * Number(comprimento.value)).toFixed(2);
            const valorDoTerreno = (area * Number(valor.value)).toFixed(2);
            result.innerHTML = `<p>Área do terreno = ${area} <br> Preço do terreno = ${valorDoTerreno}</p>`;
            limpaInputs();
        }
        e.preventDefault();
    });
}

main();