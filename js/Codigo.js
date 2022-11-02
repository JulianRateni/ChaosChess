

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
  var htmlPieza1
  var htmlPieza2
  var piezaSel
  var piezaID
  var idIntervalo

    function renderTablero(){
         for(y = 0; y < 8; y++){
            for(x = 0; x < 8; x++){
                if(tablero[y][x] != "nd"){
                    $("#"+y+x).html(`<img id="`+x+tablero[y][x]+`" src="img/Piezas/`+tablero[y][x]+`.png">`)
                }else{
                    $("#"+y+x).html(` `)
                }
            }
        }
    }

    renderTablero();

    var tiempo = parseInt($("#Reloj").val())

    $(".espacio").on("click",function(){
        y = $(this).attr("id").slice(0,1)
        x = $(this).attr("id").slice(-1)
        if($(this).hasClass("resalto") || $(this).hasClass("capturable")){
            htmlPieza2 = "#"+$(this).attr("id")
            console.log(htmlPieza2)
            moverOCapturar(htmlPieza1,piezaSel,htmlPieza2);
            return;
        }
        $(".resalto").removeClass("resalto")
        $(".capturable").removeClass("capturable")
        htmlPieza1 = "#"+$(this).attr("id")
       piezaSel = $(this).html()
       piezaID = $(this).html().slice(10,13)
       console.log(piezaID+" "+y+x)
       if(piezaID.slice(0,2)!="nd"){
         if(piezaID.slice(1,2) == turnos[deQuien].slice(0,1)){
             switch(piezaID.slice(0,1)){
                 case "P": movPeon(piezaID.slice(1,3),y,x); break;
                 case "C": movCaballo(y,x); break;
                 case "A": movAlfil(y,x); break;
                 case "T": movTorre(y,x); break;
                 case "D": movDama(y,x); break;
                 case "R": movRey(y,x); break;
                 }
         }
       }
     })

     function moverOCapturar(OGPos,pieza,SeMueveOCapturaA){
        $(OGPos).empty().html(` `)
        var victoria = false
        console.log(piezaID.slice(1,3).slice(-1))
        var espacioACapturar = $(SeMueveOCapturaA).html().slice(10,13)
        if(espacioACapturar.slice(0,1) == "R"){
            victoria = true
        }
        if(piezaID.slice(1,3).slice(-1) == "C"){
            $(SeMueveOCapturaA).empty().html(pieza.slice(0,12)+`" `+pieza.slice(14,33)+`.png">`)
        }else{
            $(SeMueveOCapturaA).empty().html(pieza)
        }
        if(victoria){
            alert("un jugador gano, todavia no se quien :^p");
            window.location.reload()
            return;
        }
        $(".resalto").removeClass("resalto")
        $(".capturable").removeClass("capturable")
        tiempoFin(true);
     }

     function movPeon(tipo,y,x){
        console.log("#"+(y-(-1))+x)
        if(tipo.slice(0,1) == "B"){
            if($("#"+(y-1)+x).html()==` `){
                $("#"+(y-1)+x).addClass("resalto")
            }
            if(tipo.slice(-1) == "C"){
                if($("#"+(y-2)+x).html()==` `){
                    $("#"+(y-2)+x).addClass("resalto")
                }
            }
            if(!($("#"+(y-1)+(x-1)).html()== ` `)){
                $("#"+(y-1)+(x-1)).addClass("capturable")
            }
            if(!($("#"+(y-1)+(x-(-1))).html()== ` `)){
                $("#"+(y-1)+(x-(-1))).addClass("capturable")
            }
        }
        if(tipo.slice(0,1) == "N"){
            if($("#"+(y-(-1))+x).html()==` `){
                $("#"+(y-(-1))+x).addClass("resalto")
            }
            if(tipo.slice(-1) == "C"){
                if($("#"+(y-(-2))+x).html()==` `){
                    $("#"+(y-(-2))+x).addClass("resalto")
                }
            }
            if(!($("#"+(y-(-1))+(x-1)).html()==` `)){
                $("#"+(y-(-1))+(x-1)).addClass("capturable")
            }
            if(!($("#"+(y-(-1))+(x-(-1))).html()==` `)){
                $("#"+(y-(-1))+(x-(-1))).addClass("capturable")
            }
        }
     }
     function movCaballo(y,x){
        if($("#"+(y-2)+(x-1)).html()==` `){
            $("#"+(y-2)+(x-1)).addClass("resalto")
        }else{
            $("#"+(y-2)+(x-1)).addClass("capturable")
        }
        if($("#"+(y-2)+(x-(-1))).html()==` `){
            $("#"+(y-2)+(x-(-1))).addClass("resalto")
        }else{
            $("#"+(y-2)+(x-(-1))).addClass("capturable")
        }
        
        if($("#"+(y-(-1))+(x-(-2))).html()==` `){
            $("#"+(y-(-1))+(x-(-2))).addClass("resalto")
        }else{
            $("#"+(y-(-1))+(x-(-2))).addClass("capturable")
        }
        if($("#"+(y-1)+(x-(-2))).html()==` `){
            $("#"+(y-1)+(x-(-2))).addClass("resalto")
        }else{
            $("#"+(y-1)+(x-(-2))).addClass("capturable")
        }

        if($("#"+(y-(-2))+(x-1)).html()==` `){
            $("#"+(y-(-2))+(x-1)).addClass("resalto")
        }else{
            $("#"+(y-(-2))+(x-1)).addClass("capturable")
        }
        if($("#"+(y-(-2))+(x-(-1))).html()==` `){
            $("#"+(y-(-2))+(x-(-1))).addClass("resalto")
        }else{
            $("#"+(y-(-2))+(x-(-1))).addClass("capturable")
        }

        if($("#"+(y-(-1))+(x-2)).html()==` `){
            $("#"+(y-(-1))+(x-2)).addClass("resalto")
        }else{
            $("#"+(y-(-1))+(x-2)).addClass("capturable")
        }
        if($("#"+(y-1)+(x-2)).html()==` `){
            $("#"+(y-1)+(x-2)).addClass("resalto")
        }else{
            $("#"+(y-1)+(x-2)).addClass("capturable")
        }
     }
     function movAlfil(y,x){
        for(var i=1;i<=8;i++){
            if($("#"+(y-i)+(x-(-i))).html()==` `){
                $("#"+(y-i)+(x-(-i))).addClass("resalto")
            }else{
                $("#"+(y-i)+(x-(-i))).addClass("capturable")
                break;
            }
        }
        for(var i=1;i<=8;i++){
            if($("#"+(y-i)+(x-i)).html()==` `){
                $("#"+(y-i)+(x-i)).addClass("resalto")
            }else{
                $("#"+(y-i)+(x-i)).addClass("capturable")
                break;
            }
        }
        for(var i=1;i<=8;i++){
            if($("#"+(y-(-i))+(x-i)).html()==` `){
                $("#"+(y-(-i))+(x-i)).addClass("resalto")
            }else{
                $("#"+(y-(-i))+(x-i)).addClass("capturable")
                break;
            }
        }
        for(var i=1;i<=8;i++){
            if($("#"+(y-(-i))+(x-(-i))).html()==` `){
                $("#"+(y-(-i))+(x-(-i))).addClass("resalto")
            }else{
                $("#"+(y-(-i))+(x-(-i))).addClass("capturable")
                break;
            }
        }
     }
     function movTorre(y,x){
        for(var i=1;i<=8;i++){
            if($("#"+(y-i)+(x)).html()==` `){
                $("#"+(y-i)+(x)).addClass("resalto")
            }else{
                $("#"+(y-i)+(x)).addClass("capturable")
                break;
            }
        }

        for(var i=1;i<=8;i++){
            if($("#"+(y)+(x-i)).html()==` `){
                $("#"+(y)+(x-i)).addClass("resalto")
            }else{
                $("#"+(y)+(x-i)).addClass("capturable")
                break;
            }
        }

        for(var i=1;i<=8;i++){
            if($("#"+(y-(-i))+(x)).html()==` `){
                $("#"+(y-(-i))+(x)).addClass("resalto")
            }else{
                $("#"+(y-(-i))+(x)).addClass("capturable")
                break;
            }
        }
        
        for(var i=1;i<=8;i++){
            if($("#"+(y)+(x-(-i))).html()==` `){
                $("#"+(y)+(x-(-i))).addClass("resalto")
            }else{
                $("#"+(y)+(x-(-i))).addClass("capturable")
                break;
            }
        }
     }
     function movDama(y,x){
        movAlfil(y,x);
        movTorre(y,x);
     }
     function movRey(y,x){
        if($("#"+(y-1)+(x-(-1))).html()==` `){
            $("#"+(y-1)+(x-(-1))).addClass("resalto")
        }else{
            $("#"+(y-1)+(x-(-1))).addClass("capturable")
        }
        if($("#"+(y-1)+(x-1)).html()==` `){
            $("#"+(y-1)+(x-1)).addClass("resalto")
        }else{
            $("#"+(y-1)+(x-1)).addClass("capturable")
        }
        if($("#"+(y-(-1))+(x-1)).html()==` `){
            $("#"+(y-(-1))+(x-1)).addClass("resalto")
        }else{
            $("#"+(y-(-1))+(x-1)).addClass("capturable")
        }
        if($("#"+(y-(-1))+(x-(-1))).html()==` `){
            $("#"+(y-(-1))+(x-(-1))).addClass("resalto")
        }else{
            $("#"+(y-(-1))+(x-(-1))).addClass("capturable")
        }
        if($("#"+(y-1)+(x)).html()==` `){
            $("#"+(y-1)+(x)).addClass("resalto")
        }else{
            $("#"+(y-1)+(x)).addClass("capturable")
        }
        if($("#"+(y)+(x-1)).html()==` `){
            $("#"+(y)+(x-1)).addClass("resalto")
        }else{
            $("#"+(y)+(x-1)).addClass("capturable")
        }
        if($("#"+(y-(-1))+(x)).html()==` `){
            $("#"+(y-(-1))+(x)).addClass("resalto")
        }else{
            $("#"+(y-(-1))+(x)).addClass("capturable")
        }
        if($("#"+(y)+(x-(-1))).html()==` `){
            $("#"+(y)+(x-(-1))).addClass("resalto")
        }else{
            $("#"+(y)+(x-(-1))).addClass("capturable")
        }
     }
 
    function DadoEventos(n){
        switch(n){
            case 1: alert("Hambre"); break;
            case 2: alert("Peones Recargados"); break;
            case 3: alert("Francotirador"); break;
            case 4: alert("Muerte"); break;
            case 5: alert("Conquista"); break;
            case 6: alert("Magia Negra"); break;
            case 7: alert("Sacrificio Para Los Dioses"); break;
            case 8: alert("Erupcion Volcanica"); break;
            case 9: alert("Zombies"); break;
            case 10: alert("Amnesia"); break;
            case 11: alert("Defensor de la Reina"); break;
            case 12: alert("Muerte a la Reina"); break;
            case 13: alert("Guerra"); break;
            case 14: alert("El Libro Rojo"); break;
            case 15: alert("Linea"); break;
            case 16: alert("Doble Roll"); break;
            case 17: alert("Columna"); break;
            case 18: alert("Intercambio"); break;
            case 19: alert("Resurreccion"); break;
            case 20: alert("Prosperidad"); break;
        }
        if(!DobleRoll){
            CambioDado();
        }
    }
 
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

        setTimeout(function(){DadoEventos(Evento);},200) 
        
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

    function tiempoFin(jugadorJugo){
        clearInterval(idIntervalo);
        if(!jugadorJugo){
            tiempo = `:(`
        }
        $("#Reloj").val(tiempo)
        setTimeout(FinTurno,100);
    }

    function TurnoJugador(Color){
        $("#TurnoDe").val("Turno de: "+Color);
        setTimeout(function(){
             idIntervalo = setInterval(function(){
                if(tiempo <= 0){
                    tiempoFin(false);
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


