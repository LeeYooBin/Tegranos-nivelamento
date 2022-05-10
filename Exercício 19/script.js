function main(){
    const salario = document.querySelector('#salario');
    const calcBtn = document.querySelector('#calcBtn');
    const result = document.querySelector('#result');

    const cleanInput = () => salario.value = '';

    const novoSalario = salario => {
        if(salario < 1000) return [0.2 * salario + salario, 0.2 * salario + salario - salario, '20%']
        if(salario >= 1000 && salario < 3000) return [0.15 * salario + salario, 0.15 * salario + salario - salario, '15%']
        if(salario >= 3000 && salario < 8000) return [0.1 * salario + salario, 0.1 * salario + salario - salario, '10%']
        return [0.05 * salario + salario, 0.05 * salario + salario - salario, '05%']
    }

    calcBtn.addEventListener('click', e => {
        if(salario.value){
            const aux = novoSalario(Number(salario.value));
            result.innerHTML = `<p>
                                    Novo salário = R$ ${aux[0].toFixed(2)}
                                    <br>
                                    Aumento = R$ ${aux[1].toFixed(2)}
                                    <br>
                                    Novo salário = ${aux[2]}
                                </p>`;
            cleanInput();
        }
        e.preventDefault();
    });
}

main();