// Funciones para calcular totales
function totalIngresos(total, ingresos) {
    let total = total + ingreso.monto
    return total 
    //let ingresos = JSON.parse(localStorage.getItem('ingresos')) || [];
    //return ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
}   

function totalGastos() {
    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    return gastos.reduce((total, gasto) => total + gasto.monto, 0);
}