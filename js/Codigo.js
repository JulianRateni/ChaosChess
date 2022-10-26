
$("Document").ready(function(){
    const D20Normal = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    var Dadopara = false
    const turnos = ["Blanco", "Negro", "Dado"]
    var deQuien = 0

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


    function CambioDado(){
        Dadopara = !Dadopara
        FinTurno();
    }

    function TurnoDado(){
        var Evento = D20Normal[Math.floor(Math.random()*78)]
        $("#Eventoimg").attr("src","img/Eventos/"+Evento+".png")
        if(Dadopara){
            $("#divCard").attr("class","container blanco")
        }else{
            $("#divCard").attr("class","container negro")
        }
        setTimeout(function(){alert("hace de cuenta que hace el evento seleccionado");},200)

        CambioDado();
    }

    $("#BtnDado").on("click",function(){
        $(this).prop("disabled", true)
        ComienzoTurno();
    });

    function FinTurno(){
        if(tiempo == 0){
            alert("Se te acabo el tiempo !!")
        }
        tiempo = 30
        $("#Reloj").val(tiempo)
        deQuien++
        ComienzoTurno();
    }

    function TurnoJugador(Color){
        $("#TurnoDe").val("Turno de: "+Color);
        let idIntervalo = setInterval(function(){
            if(tiempo == 0){
                clearInterval(idIntervalo);
                FinTurno();
            }
            else{
                tiempo--
                $("#Reloj").val(tiempo)
            }
        },1000)
    }


    function ComienzoTurno(){
        if(deQuien == 3){
            deQuien = 0
        }
        console.log(deQuien);
        switch(turnos[deQuien]){
            case "Blanco": TurnoJugador("Blanco"); break
            case "Negro": TurnoJugador("Negro"); break
            case "Dado": TurnoDado(); break
        }
    }

});


