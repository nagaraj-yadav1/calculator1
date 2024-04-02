let input=document.getElementById("inputbox");
let button=document.querySelectorAll("button")
String='';
let arr=Array.from(button);
console.log(arr)
arr.forEach(button=>{
    button.addEventListener("click",(d)=>{
        if(d.target.innerHTML=="="){
            String=eval(String);
            input.value=String;
        }
        else if(d.target.innerHTML=="AC"){
            String=""
            input.value=String;
        }
        else if(d.target.innerHTML=="DEL"){
            String=String.substring(0,String.length-1);
            input.value=String;
        }
       else{ String+=d.target.innerHTML;
        input.value=String;
    }
    })
})