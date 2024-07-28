let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let again = document.querySelector("#again");

let mssg_box = document.querySelector(".mssg-box");

let mssg = document.querySelector("#mssg");

let turnO = true;
//playerO,playerX

const winningpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

boxes.forEach( (box) => {
    box.addEventListener("click" , () =>
        {
        // console.log("click");
        if(turnO)
        {
            box.innerText = "O";
            turnO= false; 
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        comparewin();

    });
   
});

const enablebttn = () => {

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disablebttn = () => {

    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    mssg.innerText =`Congrulations! Winner is ${winner}`;
    mssg_box.classList.remove("hide");
    disablebttn();
};

const comparewin = () => {
   
    for(let pattern of winningpattern){
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        pos1val = boxes[pattern[0]].innerText;
        pos2val = boxes[pattern[1]].innerText;
        pos3val = boxes[pattern[2]].innerText;

        if ( pos1val != "" && pos2val != "" && pos3val != "")
     {

        if ( pos1val === pos2val && pos2val === pos3val)
        {
            // console.log(pos1val ,"win");

            showWinner(pos1val);
        }

     }
    }

};

const resetGame = () =>{
    turnO = true;
    enablebttn();
    mssg_box.classList.add("hide");

}

again.addEventListener( "click" , resetGame);
reset.addEventListener( "click" , resetGame);