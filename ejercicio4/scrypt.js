function calcularIMC() {
    const altura = parseFloat($('#altura').val());
    const peso = parseFloat($('#peso').val());
    const imc = $('#imc');

    if (altura > 0 && peso > 0) {
        const calculoIMC = peso / (altura * altura);
        imc.text('IMC: ' + calculoIMC.toFixed(2));
    } else {
        imc.text('IMC: Por favor, introduce valores válidos.');
    }
}
