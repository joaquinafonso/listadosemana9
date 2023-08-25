const inputItem = document.getElementById("item");
const buttonAgregar = document.getElementById("agregar");
const ulContenedor = document.getElementById("contenedor");
const buttonLimpiar = document.getElementById("limpiar");

let  array = JSON.parse(localStorage.getItem("items")) || [];

function agregarElemento (elemento){
    const liItem = document.createElement("li");
    liItem.appendChild(document.createTextNode(elemento));
    ulContenedor.appendChild(liItem)
};

function mostrarElementos(item){
    ulContenedor.innerHTML = "";
    for (let i = 0; i < item.length ; i++){
        agregarElemento(item [i]);
    }
};

mostrarElementos(array)

buttonAgregar.addEventListener("click", () =>{
    array.push(inputItem.value);
    agregarElemento(inputItem.value);
    localStorage.setItem("items", JSON.stringify(array));
    inputItem.value = "";
});

buttonLimpiar.addEventListener("click", () => {
    array = [];
    localStorage.setItem("items", JSON.stringify(array));
    mostrarElementos(array);

})

