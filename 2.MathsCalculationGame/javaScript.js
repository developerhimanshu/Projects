let play = false;
let score;
var action;
var timeRemaining;
let res;
let boxnum;
//If we click on the statrt/reset button
document.getElementById("start").onclick = function () {
    //If we are playing
    //reload page
    if (play == true) {
        location.reload();  //*****reload the page******
    }
    //If we are Not playing
    else {
        play = true

        //set score to zero
        score = 0;
        document.getElementById("count").innerHTML = score;
        hide("gameover");
        //change button to reset
        document.getElementById("start").innerHTML = 'Reset Game';

        //show countdown box
        showCountDown();
        timeRemaining = 60;
        document.getElementById("timeRemainingValue").innerHTML = timeRemaining;

        startCountDown()
        question();
    
    }
}



//*****clicking on an answer box******

for(i=1; i<5; i++){
document.getElementById("box"+i).onclick=function(){
    //check if we are playing
    if(play==true){
        if(this.innerHTML==res){
            score++;
            document.getElementById("count").innerHTML=score;
            
            //hide wrongbox and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            document.getElementById("question").innerHTML="";
            question();
        }else{
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
}
//functions

//1. show the counter
function showCountDown() {
    show("timeRemaining");
}

//2.Start the counter
function startCountDown() {
    action = setInterval(function () {
        timeRemaining--;
        document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
        if (timeRemaining == 0) {
            stopCountDown();
        }

    }, 1000);
}

//3.Stop the counter
function stopCountDown() {
    clearInterval(action);
    show("gameover");
    document.getElementById("question").innerHTML="";
    document.getElementById("gameover").innerHTML = '<p>Game Over!</p><p>Your Score is: ' + score + '.</p>';
    hide("timeRemaining");
    hide("correct");
    hide("wrong");
    play = false;
    document.getElementById("start").innerHTML = 'Start Game';


}


//4. Hide the elements
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//5. Show the elements
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//5. Generate Question & Answer
function question() {
    const o1 = Math.round(Math.random() * 9 + 1);
    const o2 = Math.round(Math.random() * 9 + 1);
    const ops = ['+', '-', 'x']
    const opindex = Math.floor((Math.random()) * 3);
    var operator = ops[opindex];
    let large, small;
    if(opindex==1)
    {
        if(o1>o2){
            document.getElementById("question").innerHTML += '<br/>' + o1 + operator + o2;
            large=o1;
            small=o2;
        }
        else{
             document.getElementById("question").innerHTML += '<br/>' + o2 + operator + o1;
             large=o2;
             small=o1;
        }
        
    }
    else
        document.getElementById("question").innerHTML += '<br/>' + o1 + operator + o2;


    switch (opindex) {
        case 0: res = o1 + o2; break;
        case 1: res =large - small; break;
        case 2: res = o1 * o2; break;
    }

    boxnum = Math.round(Math.random() * 3 + 1);
    document.getElementById("box" + boxnum).innerHTML = res;

    var answers=[res];
    for (i = 1; i < 5; i++) {
        if (i != boxnum) {
            let wrongAnswer;
            do{
                wrongAnswer = (Math.round(Math.random() * 9 + 1)) * (Math.round(Math.random() * 9 + 1));

            }while (answers.indexOf(wrongAnswer)>-1);
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}



