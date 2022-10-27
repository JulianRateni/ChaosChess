
$("Document").ready(function(){
    const D20Normal = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    var Dadopara = true
    const turnos = ["Blanco", "Negro", "Dado"]
    var deQuien = 3

    var tablero = [
    ["TN","CN","AN","DN","RN","AN","CN","TN"],
    ["PNC","PNC","PNC","PNC","PNC","PNC","PNC","PNC"],
    ["nd","nd","nd","nd","nd","nd","nd","nd"],
    ["nd","nd","nd","nd","nd","nd","nd","nd"],
    ["nd","nd","nd","nd","nd","nd","nd","nd"],
    ["nd","nd","nd","nd","nd","nd","nd","nd"],
    ["PBC","PBC","PBC","PBC","PBC","PBC","PBC","PBC"],
    ["TB","CB","AB","DB","RB","AB","CB","TB"]
    ]
  /*                      y  x
      console.log(tablero[7][7])
      este comando devolveria "TB"
  */
  var y = 0
  var x = 0

    
    $(".espacio").on("click",function(){
       y = $(this).attr("id").slice(0,1)
       x = $(this).attr("id").slice(-1)
      var piezaSel = $(this).html().slice(10,12)
      console.log(piezaSel+" "+y+x)
    })
    


    function renderTablero(){
         for(y = 0; y < 8; y++){
            for(x = 0; x < 8; x++){
                $("#"+y+x).html(`<img id="`+x+tablero[y][x]+`" src="img/Piezas/`+tablero[y][x]+`.png">` )
            }
        }
    }

    renderTablero();

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


