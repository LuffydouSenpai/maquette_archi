const map = document.getElementById("map");
let defil;
window.addEventListener(
    "scroll",
    function () {

        defil = document.scrollTop || document.scrollingElement.scrollTop || window.scrollY;
        //if (defil >= 1200) {

            //map.style.backgroundColor = "red";  
        //}else {

            //map.style.backgroundColor = "aqua";  
        //}

        if (defil+document.documentElement.clientHeight >= document.documentElement.offsetHeight-100){
            map.style.opacity = 1;
            map.style.left = 0;
        }
    }
)