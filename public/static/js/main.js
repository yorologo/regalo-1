const mi_principessa = (estado) => {
    if (estado) {
        document.getElementById("corazon").classList.remove("corazon-normal");
        document.getElementById("corazon").classList.add("corazon-feliz");
        document.getElementById("fondo").classList.add("colores");
        document.getElementById("estado").innerHTML="Ahora con";
        document.getElementById("switch").onclick = function() {mi_principessa(false)};
    } else {
        document.getElementById("corazon").classList.remove("corazon-feliz");
        document.getElementById("corazon").classList.add("corazon-normal");
        document.getElementById("fondo").classList.remove("colores");
        document.getElementById("estado").innerHTML="Antes de conocer a";
        document.getElementById("switch").onclick = function() {mi_principessa(true)};
    }
};
