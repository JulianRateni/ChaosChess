$("Document").ready(function(){
    const D20Normal = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    var Dadopara = true

    const turnos = ["Blanco", "Negro", "Dado"]
    var deQuien = 0
    var ciclosHechos = 0

    const tablero = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1]
    ]

    var tiempo = parseInt($("#Reloj").val())


    function fncCambioDado(){
        Dadopara = !Dadopara
        console.log(Dadopara)
        if(Dadopara){
            $("#divCard").attr("class","container blanco")
        }else{
            $("#divCard").attr("class","container negro")
        }
    }

    function TurnoDado(){
        var Evento = D20Normal[Math.floor(Math.random()*78)]
        $("#Eventoimg").attr("src","img/Eventos/"+Evento+".png")

        fncCambioDado();
    }

    $("#BtnDado").on("click",TurnoDado);

    function FinTurno(){

        deQuien++
        ComienzoTurno();
    }

    function TurnoJugador(Color){

    }


    function ComienzoTurno(){
        if(deQuien == 3){
            ciclosHechos++
        }
        deQuien = deQuien - ciclosHechos * 3
        switch(turnos[deQuien]){
            case "Blanco":
            case "Negro":
            case "Dado":
        }
    }

});


