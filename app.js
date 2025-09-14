let gameSeq=[];
let UserSeq=[];

let btns=["yellow","red","purple","green"]

let started=false;
let level=0;
let h2=document.querySelector('h2')
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started")
        started=true

        levelup()
    }
})
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash")
    
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    UserSeq=[]
    level++
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx]
    let randbtn=document.querySelector(`.${randColor}`)
    // console.log(ranIdx)
    // console.log(randColor)
    // console.log(randbtn)
    gameSeq.push(randColor)
    gameFlash(randbtn)
}

function checkAns(idx){
    if(UserSeq[idx]==gameSeq[idx]){
        if(UserSeq.length==gameSeq.length){
            setTimeout(levelup,250)
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white"
        },150)
        reset()
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute('id');
    UserSeq.push(userColor)
    checkAns(UserSeq.length-1)
}

let allBtns=document.querySelectorAll('.btn')
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false
    gameSeq=[]
    UserSeq=[]
    level=0
}
