// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
/*Los siguientes elementos deben declararse dentro de la función para que estén actualizados al momento de ser usados */
// const li = document.getElementsByName("lista-de-productos") 
// const $i = document.querySelector('#input');



const displayProductos = () => {
  const li = document.getElementById("lista-de-productos");
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
    }
}
/*La funcion no estaba declarada */
displayProductos(productos);  
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  /*Se corrige la declaracion de variables, se realiza dentro de la funcion y se coloca un id al inputo para que sea reconocido ya que estaba como clase y en html no estaba identificado, además que debe usarse un id, las variables deben ser declaradas al inicio de la funcion */
  const li = document.getElementById("lista-de-productos");
  const $i = document.querySelector('#input');
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  console.log(li);
console.log(li.firstChild);
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

 

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  