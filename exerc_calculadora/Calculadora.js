// soma.addEventListener('click', function (event) {

//     var pn = document.getElementById('pn').value;
//     var sn = document.getElementById('sn').value;

//     var result = parseFloat(pn) + parseFloat(sn);

//     if (pn != 0) {
//         alert('O resultado é  ' + result);
//     } else {
//         alert('O resultado é  ' + result);
//     }

// });

// dimi.addEventListener('click', function (event) {

//      var pn = document.getElementById('pn').value;
//     var sn = document.getElementById('sn').value;

//     var result = parseFloat(pn) - parseFloat(sn);

//     if (pn != 0) {
//         alert('O resultado é  ' + result)
//     } else {
//         alert('O resultado é  ' + result)
//     }

// });

// multi.addEventListener('click', function (event) {

//     let pn = document.getElementById('pn').value;
//     let sn = document.getElementById('sn').value;

//     if (pn != 0) {
//         alert('O resultado é  ' + pn * sn);
//     } else {
//         alert('O resultado é  ' + pn * sn);
//     }

// });

// divi.addEventListener('click', function (event) {

//     let pn = document.getElementById('pn').value;
//     let sn = document.getElementById('sn').value;

//     if (pn != 0) {
//         alert('O resultado é ' + pn / sn);
//     } else {
//         alert('O resultado é ' + pn / sn);
//     }

// });

function calcular(operacao) {
    let pn = document.getElementById('pn').value;
    let sn = document.getElementById('sn').value;
    let result;

    switch (operacao) {
        case 'soma':
            result = parseFloat(pn) + parseFloat(sn);
            break;
        case 'dimi':
            result = parseFloat(pn) - parseFloat(sn);
            break;
        case 'multi':
            result = parseFloat(pn) * parseFloat(sn);
            break;
        case 'divi':
            result = parseFloat(pn) / parseFloat(sn);
            break;
        default:
            alert('Operação inválida');
            return;
    }

    alert('O a bosta do resultado é ' + result);
}