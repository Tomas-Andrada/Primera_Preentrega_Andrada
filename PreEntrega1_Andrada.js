function calcularDescuento(precio, porcentajeDescuento) {
    return (precio * porcentajeDescuento) / 100;
}

let precioTotal = 0;
let producto;

do {
    producto = parseFloat(prompt("Ingrese el precio del producto (0 para finalizar):"));
    precioTotal += producto;
} while (producto !== 0);

let formaPago = prompt("Ingrese la forma de pago (debito, credito o efectivo):").toLowerCase();
let porcentaje = 0;
switch (formaPago) {
    case "debito":
    case "credito":
        porcentaje = 10;
        break;
    case "efectivo":
        porcentaje = 20;
        break;
    default:
        console.log("Forma de pago no reconocida. No se aplica descuento.");
}
let descuento = calcularDescuento(precioTotal, porcentaje);
let precioFinal = precioTotal - descuento;

console.log("Precio total de los productos: $" + precioTotal.toFixed(2));
console.log("Forma de pago: " + formaPago);
console.log("Porcentaje de descuento aplicado: " + porcentaje + "%");
console.log("Monto del descuento: $" + descuento.toFixed(2));
console.log("Precio final después del descuento: $" + precioFinal.toFixed(2));
