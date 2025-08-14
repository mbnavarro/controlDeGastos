let cartStorage = localStorage.getItem("listadoGastos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("transacciones-section")

function renderTransaccion ( cartItems ) {
    cartItems.forEach(categoria => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${categoria.nombre}</h3>
                          <input type="text" value="${categoria.gasto}" readonly>`
        cartContainer.appendChild(cart)
    })
}

renderTransaccion(cartStorage)