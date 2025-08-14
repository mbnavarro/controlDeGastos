const categoriasGastos=[
    {
        id: 1,
        nombre: "Comida",
        opciones: ["Supermercado", "Verduleria", "Restaurante", "Delivery"]
    },
    {
        id:2,
        nombre: "Vivienda",
        opciones: ["Alquiler", "Servicios"]
    },
    {
        id: 3,
        nombre: "Gastos personales",
        opciones: ["Ropa", "Cuidado personal"]
    },
    {
        id: 4,
        nombre: "Otros",
        opciones: ["Regalos", "Repentino"]
    }
]

let gastosContainers = document.getElementById("gastos-container")
let listadoGastos = []

function renderCategorias(categoriasArray){
    categoriasArray.forEach(categoria =>{
        const card = document.createElement("div")

        card.innerHTML = `<h3>${categoria.nombre}</h3>
                          <input type="number" id="gasto-${categoria.id}"></input>
                          <button class="agregarGasto" id="${categoria.id}">Agregar gasto</button>`
        gastosContainers.appendChild(card)
    })
    agregarALasTransacciones()
}

renderCategorias(categoriasGastos)

function agregarALasTransacciones(){
    addButton = document.querySelectorAll(".agregarGasto")
    addButton.forEach(button => {
        button.onclick = (e) =>{
            const gastoId = e.currentTarget.id
            const selectedGasto = categoriasGastos.find(gasto => gasto.id == gastoId)

            listadoGastos.push(selectedGasto)
            console.log(listadoGastos)

            localStorage.setItem("listadoGastos", JSON.stringify(listadoGastos))
        }
    })
}