precio = 400000
let cantidad = 0;
let total = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

totalSpan = document.querySelector(".valor-total");
totalSpan.innerHTML = total;

function suma(){
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    total = precio * cantidad;
    totalSpan.innerHTML = total;
}

function resta(){
    if (cantidad>0){
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        total = precio * cantidad;
        totalSpan.innerHTML = total;
    }
}