const navBoton = document.querySelector(".nav-boton");
const navMenu = document.querySelector(".listaNav");
var activadoNav = false; /*arregla bug aparece nav activado*/

function changeNav () {
/*navBoton.addEventListener("click" , () => {  */
if (activadoNav) {
  navMenu.classList.add('listaNav-media');
  navMenu.classList.remove('listaNav-visible');
activadoNav = false;
} 
else {
  navMenu.classList.add('listaNav-visible');
  navMenu.classList.remove('listaNav-media');
  activadoNav = true;
}
 /*   navMenu.classList.toggle("listaNav-visible");*/
/*});*/

}

if (document.getElementsByClassName("index").length > 0) { /*si es el index utilizando jQuery y consumiendo servicios Rest*/
    
  /*  $(document).ready(() => {
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=health&language=es&apiKey=bbd1487230a34e3fb40e7c3bf5fb48fe",
  type: "get",
  dataType: 'json',
  success: function (response) {
      console.log(response);
for (var i = 0; i < 3; i++) {
   
 let titulo = $(".noticia-" + (i + 1)).find(".titulo");
  let contenido = $(".noticia-" + (i + 1)).find(".contenido");
  let a =  $(".url-noticia-" + (i + 1) );
  let img =  $(".img-noticia-" + (i + 1) );
    titulo.text(response.articles[i].title);
    contenido.text(response.articles[i].description);
  a.attr("href", response.articles[i].url);
  img.attr("src", response.articles[i].urlToImage);
}
  }
});*/

$.ajax({
  url: "https://api.thenewsapi.com/v1/news/all?language=es&categories=health&api_token=OLCmp6HwlYRRv6NlgCy2pF7CinZNxUijiNlwqLUM",
  type: "get",
  dataType: 'json',
  success: function (response) {
      console.log(response);
for (var i = 0; i < 3; i++) {
   
 let titulo = $(".noticia-" + (i + 1)).find(".titulo");
  let contenido = $(".noticia-" + (i + 1)).find(".contenido");
  let a =  $(".url-noticia-" + (i + 1) );
  let img =  $(".img-noticia-" + (i + 1) );
    titulo.text(response.data[i].title);
    contenido.text(response.data[i].description);
  a.attr("href", response.data[i].url);
  img.attr("src", response.data[i].image_url);
}
  }
});

}


if (document.getElementsByClassName("has-aside").length > 0) { /*si tiene aside*/
  const asideBoton = document.querySelector(".aside-boton");
    const bodyContenido = document.querySelector(".body-contenido");
    const aside = document.querySelector(".aside-noDes");
    var activadoAside = false;
   
    function changeAside () {
      if (activadoAside) {
        aside.classList.add('aside-noDes');
        aside.classList.remove('aside-desplegado');
        bodyContenido.classList.remove('body-contenido-aside-des');
    activadoAside = false;
    console.log('si');
      }
      else {
        aside.classList.add('aside-desplegado');
        aside.classList.remove('aside-noDes');
        bodyContenido.classList.add('body-contenido-aside-des');
        activadoAside = true;
        console.log('no');
      }
    }
  
   /* asideBoton.addEventListener("click" , () => {  
        bodyContenido.classList.toggle("body-contenido-aside-des");
       aside.classList.toggle("aside-desplegado");
    });
  }*/
}






