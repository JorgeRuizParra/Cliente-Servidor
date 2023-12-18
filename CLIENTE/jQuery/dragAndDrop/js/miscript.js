function arrastrando(event) {
    console.log(event.target.id);
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'violet';
  }

  function arrastrandoFin(event) {
    console.log(event.target.id);
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'lightblue';
  }

function recibiendo(event){
    event.preventDefault();
    console.log(event.target.id);
}

function soltar(event) {
    event.currentTarget.style.backgroundColor = "orange";
    const id = event
      .dataTransfer
      .getData("text")
      

    console.log("soltar:"+id)
    console.log("destino:"+event.target.id)

    let objQueArrastro = $("#"+id)
    let destino = $("#"+event.target.id);

    destino.append(objQueArrastro);
}