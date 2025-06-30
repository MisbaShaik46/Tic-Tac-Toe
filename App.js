let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msgText =document.querySelector("#msg");
let clickCount=0;
let winnerIsPresent=false;
let turnO=true;//playerX, playerO
const winPatters=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        clickCount++;
        if(turnO){
            box.textContent="O"
            turnO=false;
        }
        else{
            box.textContent="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner(box)
    });
});

const showWinner = (winner) => {
   msgText.innerText ="Congratulation, "+ winner + "!";
   msgContainer.classList.remove("hide");
}
const showDraw = () => {
    msgText.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    //count=0;
}

const disableBoxes= ()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
    resetButton.disabled=true;
};

const enableBoxes= ()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.textContent="";
        //count=0;
    });
}
const checkWinner=()=>{
        for(pattern of winPatters){
         
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if((pos1Val!="" && pos2Val!="" && pos3Val!="")&&(pos1Val===pos2Val && pos2Val==pos3Val))
            {
                console.log(pos1Val+" "+pos2Val+" "+pos3Val);
                winnerIsPresent=true;
                showWinner(turnO? "X" : "O");
                disableBoxes();
                
            }
            else{
                console.log("No winner yet"+clickCount);
            }
        }
        if(clickCount==9 && winnerIsPresent==false){
            console.log("It's a draw!");
            showDraw();
        }
       
    }
    

newGameBtn.addEventListener("click",()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO=true;
    winnerIsPresent=false;
    clickCount=0;
});
resetButton.addEventListener("click",()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO=true;
    winnerIsPresent=false;
    clickCount=0;
   
});