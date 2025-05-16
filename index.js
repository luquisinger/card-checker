function identificarBandeira(cartao) {
    // Remove quaisquer caracteres não numéricos
    cartao = cartao.replace(/\D/g, '');

    // Definição dos padrões de regex para cada bandeira
    const bandeiras = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/
    };

    // Encontrar a bandeira correspondente
    return Object.keys(bandeiras).find(bandeira => bandeiras[bandeira].test(cartao)) || 'Bandeira desconhecida';
}

// Testando a função
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5105105105105100')); // MasterCard
console.log(identificarBandeira('378282246310005')); // American Express
console.log(identificarBandeira('30569309025904')); // Diners Club
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('3530111333300000')); // JCB