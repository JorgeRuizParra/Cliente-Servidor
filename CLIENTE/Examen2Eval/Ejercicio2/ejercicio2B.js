function cambiaSize(){
   //coger el tamaño seleccionado
   let tamaño = $("#selecion").val()

   //obtener la clase tam
   let claseTam = $(".tam")

   //añadir el etributo fontsize con el tamaño seleccionado a la clase
   claseTam.css("font-size", tamaño)
}
