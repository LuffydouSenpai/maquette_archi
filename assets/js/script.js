const map = document.getElementById("map");
const onEstIci = document.createElement("div");
let defil;
window.addEventListener(
    "scroll",
    function () {

        defil = document.scrollTop || document.scrollingElement.scrollTop || window.scrollY;
        if (defil+document.documentElement.clientHeight >= document.documentElement.offsetHeight-100){
            map.style.opacity = 1;
            map.style.left = 0;
            //crée un element div sous l'image de la div#map
            //qui contiendra le texte centré :
            //"Nous sommes situés à Dieppe."
            onEstIci.style.textAlign ="center";
            onEstIci.textContent ="Nous sommes situés à Dieppe.";
            map.append(onEstIci);
        }
    }
)