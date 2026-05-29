var imagenes=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
];

var i=0;

document.getElementById("siguiente").addEventListener("click",()=>{
    if(i<4){i++;}
    document.getElementById("carrusel").setAttribute("src",imagenes[i]);
});

document.getElementById("anterior").addEventListener("click",()=>{
    if(i>0){i--;}
    document.getElementById("carrusel").setAttribute("src",imagenes[i]);
});