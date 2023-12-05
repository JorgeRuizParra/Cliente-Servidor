contador = 1;

$("button").click(function(){

    li = $("<li>")
    //li.text("Elemento "+contador)
    //contador++;

    $("ul").append(li);
    
    textoLi = $("input").val();

    li.text(textoLi)

    $("li").click(function(){
        $(this).remove()
    })

    $("li").animate({
        fontSize: "30px"
        
    }, 1000)

    $("li").animate({
        fontSize: "20px"
    }, 1000)
})

