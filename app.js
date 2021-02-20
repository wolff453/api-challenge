let copy = document.querySelector(".copy")
let copy2 = document.querySelector(".teste")

copy.addEventListener("click", ()=>{
    document.querySelector(".inserindo").select()
    document.execCommand("copy")
    copy.style.display="none"
    copy2.style.display="block"
 })

function enviar(){
    var send = document.querySelector(".send").value
    var error = document.querySelector(".p1") 
    var error2 = document.querySelector(".p2") 
    var error3 = document.querySelector(".p3") 

    if(send == ""){
        error.style.opacity="1"
        return false
    }else{
        error.style.opacity="0"

    }
   if(!send.includes(".")){
       error2.style.display="block"
       return false
   }else{
    error2.style.display="none"

   }
   if(send.length < 13){
       error3.style.display="block"
       return false
   }else{
    error3.style.display="none"
    let loading = document.querySelector(".image-loading")
        loading.style.display="block"
   }
  
  
    setTimeout(()=>{
        let loading = document.querySelector(".image-loading")

        let copy = document.querySelector(".copy")
        let create= document.querySelector(".creates")
        create.classList.remove("none")
        copy.style.display="block"
        copy2.style.display= "none"
        loading.style.display="none"

     }, 5000)
    var send = document.querySelector(".send").value
    document.querySelector(".inserindo2").innerHTML = send
    let api = fetch(`https://api.shrtco.de/v2/shorten?url=${send}`)
    .then(response => response.json())
    .then(dados =>  {
         let e =  JSON.stringify(dados) 
         console.log(e)
         let p = e.substring(51,67)
         let o = p.replace("","https://")
        document.querySelector(".inserindo").value = o
        

         /* Transformei o JSON em string, depois em array com o split. Após isso, peguei o index de cada letra e utilizei no substring
             let pd = e.split("")
           console.log(pd)
        */
    })
    .catch(e => console.log("Deu erro"+ e))
      
    return false

}

let hamb = document.querySelector(".hamb")
let navbar = document.querySelector(".navbar-mobile")
let close = document.querySelector(".close")

hamb.addEventListener("click", ()=>{
        navbar.style.display="block"

        close.style.display="block"
        hamb.style.display="none"
})


close.addEventListener("click",()=>{
    navbar.style.display="none"
    close.style.display="none"
    hamb.style.display="block"

})