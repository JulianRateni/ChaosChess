
$("Document").ready(function(){
    const D20Normal = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    var Dadopara = true
    const turnos = ["Blanco", "Negro", "Dado"]
    var deQuien = 0

    const tablero = [
    [00,01,02,03,04,05,06,07],
    [10,11,12,13,14,15,16,17],
    [20,21,22,23,24,25,26,27],
    [30,31,32,33,34,35,36,37],
    [40,41,42,43,44,45,46,47],
    [50,51,52,53,54,55,56,57],
    [60,61,62,63,64,65,66,67],
    [70,71,72,73,74,75,76,77]
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
        if(tiempo == ":("){
            alert("Se te acabo el tiempo !!")
        }
        tiempo = 30.0
        $("#Reloj").val(tiempo)
        deQuien++
        ComienzoTurno();
    }

    function TurnoJugador(Color){
        $("#TurnoDe").val("Turno de: "+Color);
        setTimeout(function(){
            let idIntervalo = setInterval(function(){
                if(tiempo <= 0){
                    clearInterval(idIntervalo);
                    tiempo = `:(`
                    $("#Reloj").val(tiempo)
                    setTimeout(FinTurno,100);
                }
                else{
                    tiempo -= 0.01
                    $("#Reloj").val(tiempo)
                }
            },10)
        },500)
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


