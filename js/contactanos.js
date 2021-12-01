var map;
/*var befirCord = {lat: 10.04014, lng: -84.36661 }*/
var befitCord = {lat: 10.07329, lng: -84.31240 }
var befitlat = 10.07329;
var befitlng = -84.31240;
/*var clienteCord;
var clientelat;
var clientelng;*/

function initMap(){



map = new google.maps.Map(document.getElementById('map'), {
  center: befitCord,
  zoom: 10,
});
var markerBefit = new google.maps.Marker({
position : befitCord,
animation : google.maps.Animation.DROP,
map : map
})
/*obtenerUbicacionCliente();*/
dibujar_ruta();
};


/*function obtenerUbicacionCliente () {
navigator.geolocation.getCurrentPosition( function (position)  {
clienteCord = {
  lat: position.coords.latitude,
  lng :position.coords.longitude,
}
clientelat = position.coords.latitude;
 clientelng = position.coords.longitude;
/*var markercliente = new google.maps.Marker({
  position : clienteCord,
  animation : google.maps.Animation.DROP,
  map : map
  })*/
/*});*
}*/


function dibujar_ruta () {
  var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
/*var clientelat;
var  clientelng;*/
navigator.geolocation.getCurrentPosition( function (position)  {
  /*clienteCord = {
    lat: position.coords.latitude,
    lng :position.coords.longitude,
  }*/
 /* clientelat = position.coords.latitude;
 clientelng = position.coords.longitude;*/
  /*var markercliente = new google.maps.Marker({
    position : clienteCord,
    animation : google.maps.Animation.DROP,
    map : map
    })*/

    console.log(befitlat);
    var star = new google.maps.LatLng( position.coords.latitude, position.coords.longitude, );
     var end = new google.maps.LatLng(befitlat, befitlng);
     var request = {
       origin: star,
       destination: end,
       travelMode: google.maps.TravelMode.DRIVING
     };
     directionsService.route( request, function (response, status) {
   if (status == google.maps.DirectionsStatus.OK) {
   directionsDisplay.setDirections(response);
   directionsDisplay.setMap(map);
   directionsDisplay.setOptions({suppressMarkers: false});
   }
     });



  });




/*console.log(befitlat);
 var star = new google.maps.LatLng( clientelat, clientelng );
  var end = new google.maps.LatLng(befitlat, befitlng);
  var request = {
    origin: star,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route( request, function (response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
directionsDisplay.setMap(map);
directionsDisplay.setOptions({suppressMarkers: false});
}
  });*/
}


function validar () {

    let nombre = $('#nombre').val(); /*Obtiene valor input nombre*/
    let correo = $('#correo').val(); /*Obtiene valor input correo*/
    let apellido = $('#apellido').val(); /*Obtiene valor input apellido*/
    let fecha = $('#fecha').val(); /*Obtiene valor input fecha*/
    let genero = $('#genero').val(); /*Obtiene valor input genero*/
    let estudios = $('#gradoAcademico').val(); /*Obtiene valor input grado academico*/
    let detalle = $('#detalle').val(); /*Obtiene valor input detalle*/
    let erNombreApellido = new RegExp("^[a-z]+$", "i"); /*Expresion regular nombre y apellido*/
    let erApellidos = new RegExp("^[a-z]+ [a-z]+$", "i"); /*Expresion regular apellidos*/
    let erCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; /*Expresion regular correo*/
   
   
   
/*Validar input nombre*/
  if (nombre == "") {
    let texto =  document.getElementById('texto-nombre');
    let nombre = document.getElementById('nombre');
    texto.textContent = 'El apartado nombre es obligatorio';
    texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
    nombre.classList.add('input-error');/*Añade estilo al input de error*/
    return false; /*Evita que siga*/
  }else {
    let texto =  document.getElementById('texto-nombre');
    let nombre = document.getElementById('nombre');  
    texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
    nombre.classList.remove('input-error'); /*Remueve estilo al input de error*/
  }

  /*Que no contenga caracteres especiales*/
    if (erNombreApellido.test(nombre) == false) {
        let texto =  document.getElementById('texto-nombre');
        let nombre = document.getElementById('nombre');
        texto.textContent = 'El nombre no debe llevar caracteres especiales y números';
        texto.classList.add("error-texto-visible");/*Añade el mensaje de error*/
        nombre.classList.add('input-error');/*Añade estilo al input de error*/
        return false; /*Evita que siga*/
      } 
      else {
        let texto =  document.getElementById('texto-nombre');
        let nombre = document.getElementById('nombre');
        texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
        nombre.classList.remove('input-error'); /*Remueve estilo al input de error*/
      }





    /*Valida apellido*/
    /*Que no este vacio*/
      if (apellido == "") {
        let texto =  document.getElementById('texto-apellido');
        let apellido = document.getElementById('apellido');
        texto.textContent = 'El apartado apellido(s) es obligatorio';
        texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
        apellido.classList.add('input-error'); /*Añade estilo al input de error*/
        return false; /*Evita que siga*/
      }else {
        let texto =  document.getElementById('texto-nombre');
        let apellido = document.getElementById('apellido');
        texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
        apellido.classList.remove('input-error');/*Remueve estilo al input de error*/
      }
  
  /*Que no contenga caracteres especiales*/
      if (erNombreApellido.test(apellido) == false && erApellidos.test(apellido) == false) {
        let texto =  document.getElementById('texto-apellido');
        let apellido = document.getElementById('apellido');
        texto.textContent = 'El apellido no debe llevar caracteres especiales y números, si se desea se puede incluir los dos apellidos separados por un espacio';
        texto.classList.add("error-texto-visible");/*Añade el mensaje de error*/
        apellido.classList.add('input-error'); /*Añade estilo al input de error*/
        return false; /*Evita que siga*/
      }        else {
        let texto =  document.getElementById('texto-apellido');
        let apellido = document.getElementById('apellido');
        texto.classList.remove("error-texto-visible");/*Remueve el mensaje de error*/ 
        apellido.classList.remove('input-error');/*Remueve estilo al input de error*/
      }
    
      
      
/*Valida apartado correo*/
 /*Que no este vacio*/
 if (correo == "") {
  let texto =  document.getElementById('texto-email');
  let correo = document.getElementById('correo');
  texto.textContent = 'El apartado correo es obligatorio';
  texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
  correo.classList.add('input-error'); /*Añade estilo al input de error*/
  return false; /*Evita que siga*/
}else {
  let texto =  document.getElementById('texto-email');
  let correo = document.getElementById('correo');
  texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
  correo.classList.remove('input-error');/*Remueve estilo al input de error*/
}



  /*Que sea valido*/
      if (erCorreo.test(correo) == false) {
        let texto =  document.getElementById('texto-email');
        let correo = document.getElementById('correo');
        texto.textContent = 'El correo no es valido';
        texto.classList.add("error-texto-visible");/*Añade el mensaje de error*/
        correo.classList.add('input-error'); /*Añade estilo al input de error*/
        return false; /*Evita que siga*/
      }   else {
        let texto =  document.getElementById('texto-email');
        let correo = document.getElementById('correo');
        texto.classList.remove("error-texto-visible");/*Remueve el mensaje de error*/ 
        correo.classList.remove('input-error');/*Remueve estilo al input de error*/
      } 


/*Valida de fecha*/
if (fecha == "") {
  let texto =  document.getElementById('texto-fecha');
  let fecha = document.getElementById('fecha');
  texto.textContent = 'El apartado fecha de nacimiento es obligatorio';
  texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
  fecha.classList.add('input-error'); /*Añade estilo al input de error*/
  return false; /*Evita que siga*/
}else {
  let texto =  document.getElementById('texto-fecha');
  let fecha = document.getElementById('fecha');
  texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
  fecha.classList.remove('input-error');/*Remueve estilo al input de error*/
}



/*valida genero*/
if (genero == null) {
  let texto =  document.getElementById('texto-genero');
  let genero = document.getElementById('genero');
  texto.textContent = 'Por favor seleccione su genero';
  texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
  genero.classList.add('input-error'); /*Añade estilo al input de error*/
  return false; /*Evita que siga*/
}else {
  let texto =  document.getElementById('texto-genero');
  let genero = document.getElementById('genero');
  texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
  genero.classList.remove('input-error');/*Remueve estilo al input de error*/
}




/*valida detalle*/
if (detalle == ' ' || detalle == '') {
  let texto =  document.getElementById('texto-detalle');
  let detalle = document.getElementById('detalle');
  texto.textContent = 'El apartado detalle es obligatorio';
  texto.classList.add("error-texto-visible"); /*Añade el mensaje de error*/
  detalle.classList.add('input-error'); /*Añade estilo al input de error*/
  return false; /*Evita que siga*/
}else {
  let texto =  document.getElementById('texto-detalle');
  let detalle = document.getElementById('detalle');
  texto.classList.remove("error-texto-visible"); /*Remueve el mensaje de error*/
  detalle.classList.remove('input-error');/*Remueve estilo al input de error*/
}



/*Construye el mensaje*/
let mensaje =  'Nombre: ' + nombre + '\nApellidos: ' + apellido + '\nCorreo: ' + correo + '\nFecha de nacimiento: ' + fecha + '\nGenero: ' + genero + '\nGrado acedemico: ';

if (estudios.length == 0) { /*si no tiene estudios*/
    mensaje += "ninguno";
} else { /*Si tiene*/
    for (let i = 0; i < estudios.length; i++) { /*Recorre el arreglo de estudios*/
        mensaje+=   estudios[i] + '\n' ;
    }

}

/*Calcula la edad*/
let edad = moment(fecha, "YYYYMMDD").fromNow(); /*Calcula la diiferencia de fechas*/
mensaje+= '\nDetalle: ' + detalle + '\nEdad: ' +  edad;

    alert(mensaje);
}



function cambiar() {
  
}
