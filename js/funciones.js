jQuery(document).ready(listo); 

function listo() {
    /*alert("Hola Mundo");*/
    jQuery(".hamb").clicK(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");    
        });
    }
