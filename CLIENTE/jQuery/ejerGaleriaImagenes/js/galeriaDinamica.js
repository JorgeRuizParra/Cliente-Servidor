$("button").click(function(){
    let img = $("<img src='"+$("input").val()+"'>");
    img.addClass("imagenes");
    img.css("margin", "2px");

    let btn = $("<button id='borrar'>")
    btn.append(img)

    let div = $("<div class='grid-item'>");
    div.append(btn);

    

    $("#contenedor").append(div);
    div.fadeOut(0);
    div.fadeIn(1000);

    $("#borrar").click(function(){
        $(img).remove()
    })
})