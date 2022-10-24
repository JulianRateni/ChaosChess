$("Document").ready(function(){
    const D20Normal = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    var Dadopara = true

    function fncCambioDado(){
        Dadopara = !Dadopara
        console.log(Dadopara)
        if(Dadopara){
            $("#Dadopara").attr("class","blanco")
        }else{
            $("#Dadopara").attr("class","negro")
        }
    }

    function fncDado(){
        var Evento = D20Normal[Math.floor(Math.random()*78)]
        $("#Eventoimg").attr("src","img/Eventos/"+Evento+".png")

        fncCambioDado();
    }

    $("#BtnDado").on("click",fncDado);
});