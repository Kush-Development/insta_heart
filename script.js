 var con  = document.querySelector("#container")
 var love  = document.querySelector("i")



 con.addEventListener("dblclick", function(){
    love.style.transform='translate(-50%, -50% )  scale(1)'

    setTimeout(function(){
        love.style.transform='translate(-50%, -50% )  scale(0)'

    },2000)
 }) 



 var mon  = document.querySelector("#container1")
 var love1  = document.querySelector("j")



 mon.addEventListener("dblclick", function(){
    love1.style.transform='translate(-50%, -50% )  scale(1)'

    setTimeout(function(){
        love1.style.transform='translate(-50%, -50% )  scale(0)'

    },2000)
 }) 



 var son  = document.querySelector("#container2")
 var love2  = document.querySelector("k")



 son.addEventListener("dblclick", function(){
    love2.style.transform='translate(-50%, -50% )  scale(1)'

    setTimeout(function(){
        love2.style.transform='translate(-50%, -50% )  scale(0)'

    },2000)
 }) 
