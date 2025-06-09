
let btn = document.querySelector("#start");
let btn_1 = document.querySelector("#end");

let input = document.querySelector("input");
let ul = document.querySelector("ul");

let li1 = document.querySelector("#o1");
let li2 = document.querySelector("#o2");
let li3 = document.querySelector("#o3");

const word = [];


let minute = 0;
let timer = 0;


btn.addEventListener("click",()=>{
    btn.innerText = "run";
     let interval = setInterval(()=>{
    timer++;    
    if(timer==60){
        timer = 0;
        minute++;
    }

    input.addEventListener("keypress",(e)=>{
        if(e.code === "Enter"){
             clearInterval(interval);
        
        let WPA = word.length/minute;
        
        li1.innerText  = `Total WPM :  ${WPA}` ;
        li2.innerText = `Total Time:   ${minute}:${timer}`;
        li3.innerText = `Total Words:  ${word.length}`;
        return;
        }
       
    })
    },1000)
})


    input.addEventListener("keypress",(e)=>{
        if(e.code === "Space"){
            let data = input.value;
            word.push(data);
            input.value = "";
        }

    })


