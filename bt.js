function terminar(){

  $("#dientes").off('click','input[type="button"]');



}


function fractura(){
  terminar();
  console.log("entro a fractura");
  $("#dientes").on('click','input[type="button"]',function(event){
                      let id=this.id;
                      var nomboton="";
                      nomboton=nomboton.concat("#",id);
                      $(nomboton).css('background-color','#00FAFA');
                      });
            







}// fractura

function caries(){
  terminar();
  $("#dientes").on('click','input[type="button"]',function(event){
                      let id=this.id;
                      var nomboton="";
                      nomboton=nomboton.concat("#",id);
                      $(nomboton).css('background-color','#6B29D9');
                      });





}// caries

function extraer(){
  terminar();
   $("#dientes").on('click','input[type="button"]',function(event){
                        let id=this.id;
                        console.log("id:"+id);
                        var tam=id.length;
                        var numero=id.slice(tam-2,tam);
                        var diente="";
                        diente=diente.concat("#","dient",numero);
                        $(diente).css('background-color','#97FA00');

                      });



}//extraer


 function extraido(){
  terminar();
   $("#dientes").on('click','input[type="button"]',function(event){
                        let id=this.id;

                        var tam=id.length;
                        var numero=id.slice(tam-2,tam);
                        var diente="";
                        diente=diente.concat("#","dient",numero);
                        $(diente).css('background-color','#E73775');

                      });



}//extraido

function limpieza(numero){
                        var diente="";
                        diente=diente.concat("#","dient",numero);
                        $(diente).css('background-color','');
                        diente="";
                        diente=diente.concat("#","btcentro",numero);
                        $(diente).css('background-color','');
                        diente="";
                        diente=diente.concat("#","btizquierda",numero);
                        $(diente).css('background-color','');
                        diente="";
                        diente=diente.concat("#","btderecha",numero);
                        $(diente).css('background-color','');
                        diente="";
                        diente=diente.concat("#","btarriba",numero);
                        $(diente).css('background-color','');
                        diente="";
                        diente=diente.concat("#","btabajo",numero);
                        $(diente).css('background-color','');




}//limpieza



  function limpiar(){
  terminar();
   $("#dientes").on('click','input[type="button"]',function(event){
                        let id=this.id;
                        var tam=id.length;
                        var numero=id.slice(tam-2,tam);
                        console.log(typeof(numero));
                        limpieza(numero);





                      });



}//limpiar


function limpiarodonto(){
terminar();
var numero="";
var j;
var k;
for(j=1;j<=8;j++){

   if(j<=4){
    for(k=1;k<=8;k++){
      numero="";
      numero=numero.concat(j.toString(),k.toString());
      limpieza(numero);
    }


   }
   else{
      for(k=1;k<=4;k++){
      numero="";
      numero=numero.concat(j.toString(),k.toString());
      limpieza(numero);
    }



   }





}
}
