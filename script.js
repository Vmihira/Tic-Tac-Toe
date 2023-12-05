let btnref = document.querySelectorAll(".button-option");
let popupref = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msg = document.getElementById("message");

let winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
];

let x_turn = true;
let count = 0;

const disablebtns = () => {
    btnref.forEach((element) => (element.disabled = true));

    popupref.classList.remove("hide");
};

const enablebtns = () => {
    btnref.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popupref.classList.add("hide");
};

const winfunc = (letter) => {
    disablebtns();
    if(letter == "X") {
    msg.innerHTML = "'X' Wins The Game";
    }
    else {
        msg.innerHTML = "'O' Wins The Game";
    }
};

const drawfunc = () => {
    disablebtns();
    msg.innerHTML = "It's a draw";
};

newgamebtn.addEventListener("click", () => {
    count = 0;
    enablebtns();
});
restartbtn.addEventListener("click", () => {
    count = 0;
    enablebtns();
});

const wincheck = () => {
    for(let i of winning_pattern) {
        let [element1, element2, element3] = [
            btnref[i[0]].innerText,
            btnref[i[1]].innerText,
            btnref[i[2]].innerText,
        ];

        if((element1 != "") && (element2 != "") && (element3 != "")) {
            if(element1 == element2 && element2 == element3) {
                winfunc(element1);
            }
        }
    }
};

btnref.forEach((element) => {
    element.addEventListener("click", () => {
        if(x_turn) {
            x_turn = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            x_turn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count == 9) {
            drawfunc();
        }
        wincheck();
    });
});

window.onload = enablebtns;
