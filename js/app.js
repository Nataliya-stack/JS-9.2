let carrito = [];

function compras() {
    const LIST = document.getElementById("list");
    
    if (carrito.length === 0) {
        LIST.innerHTML = "La lista de compras esta vacia";
        return;
    }

    let html = "<ul>"; 
    carrito.forEach((item, index) => {
        html += `<li>${index+1}. ${item.name}, €${item.price.toFixed(2)}</li>`;
    });
    html += "</ul>";

    LIST.innerHTML = html; 
}

function agregar() {
    const input1 = document.getElementById("producto-input");
    const input2 = document.getElementById("presio-input");

    const nombre = input1.value.trim();
    const precio = parseFloat(input2.value);

    if (nombre !== "" && !isNaN(precio)) {
        carrito.push({name: nombre, price: precio});

        input1.value = "";
        input2.value = "";    

        compras(); 
    }
}    

function totalCompras() {
    let total = 0;
    const SUMA_TOTAL = document.getElementById("sumaTotal"); 

    for (const item of carrito) {
        total += item.price;
    }

    SUMA_TOTAL.textContent = `El total de la lista de compras: €${total.toFixed(2)}`;
}

function eliminarPorPosicion() {
    const inputPos = document.getElementById("pos-input");
    const mensajeDiv = document.getElementById("mensaje");
    const numeroUsuario = parseInt(inputPos.value);

    const index = numeroUsuario - 1;

    if (mensajeDiv) {
        mensajeDiv.textContent = "";
        mensajeDiv.className = ""; 
    }

    if (!isNaN(numeroUsuario) && index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        inputPos.value = "";
        compras();
    } else {
        if (mensajeDiv) {
            mensajeDiv.textContent = "¡Número de posición no válido!";
            mensajeDiv.className = "text-red-600 mt-3 font-semibold text-center block";
       
            setTimeout(() => {
                mensajeDiv.textContent = "";
                mensajeDiv.className = "";
            }, 3000);
        }
    }
}

function vaciarCarrito() {
    carrito = [];
    compras(); 
    const SUMA_TOTAL = document.getElementById("sumaTotal");
    if (SUMA_TOTAL) SUMA_TOTAL.textContent = "";
}

compras();
