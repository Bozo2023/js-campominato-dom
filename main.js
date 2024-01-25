//Conversione dell'Id in costante
const grigliaHtml=document.getElementById("griglia");
const griglia2Html=document.getElementById("griglia2");
const griglia3Html=document.getElementById("griglia3");

const difficoltaHtml=document.getElementById("grado");
const enterveHtml=document.getElementById("enter");

enterveHtml.addEventListener("click",function(){
   grigliaHtml.innerHTML=""

   //creiamo l'array dellle bombe
   let Bomb=[]
   do{

      let randomNum= random(100)   //inseriamo nella griglia e verifichiamo che non superi il numero delle celle
      if( ! Bomb.includes(randomNum)){
         Bomb.push(randomNum)
      }
   } while(  Bomb.length< 16 )
   console.log(Bomb)


   if(difficoltaHtml.value==="cento"){
          for(let i = 1; i <= 100;i ++){
               let box = document.createElement("div") // questo per creare un sigolo div
                  // adesso accosicamo una classe con la  funzione box.classlist
                  box.classList.add("box")
                     //Permet d'ecrire dans la box
                   box.innerText=i
                  //mettiamo la div di nome box all'interno della griglia
                  grigliaHtml.append(box)
             }
   }else if (difficoltaHtml.value==="ottantuno"){
      
      for(let i = 0; i < 81;i ++){
          let box = document.createElement("div") // questo per creare un sigolo div
         // adesso accosicamo una classe con la  funzione box.classlist
          box.classList.add("box2")
            //Permet d'ecrire dans la box
            box.innerText=i
            //mettiamo la div di nome box all'interno della griglia
            grigliaHtml.append(box)
      }
   } else if (difficoltaHtml.value==="quarantanove")
            for(let i = 0; i < 49;i ++){
                let box = document.createElement("div") // questo per creare un sigolo div
                        // adesso accosicamo una classe con la  funzione box.classlist
                box.classList.add("box3")
               //Permet d'ecrire dans la box
             box.innerText=i
               //mettiamo la div di nome box all'interno della griglia
            grigliaHtml.append(box)
      }
      if ( Bomb.includes)
})
     
/*funzione random */
function random(max){
   return Math.floor(Math.random()*max)+1
}









