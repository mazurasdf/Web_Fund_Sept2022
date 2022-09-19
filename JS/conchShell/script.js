var response = document.querySelector("#response");
var conchShell = document.querySelector("#conchShell");
var userInput = document.querySelector("#userInput");
function askQuestionStart(event) {
    event.preventDefault();

    if(userInput.value.length > 0){
        conchShell.src = "img/conchAnimated.gif";
        setTimeout(askQuestionEnd, 4000);
    }
    else{
        // alert("Please ask a question!");
        // userInput.style.border = "3px solid red";
        userInput.classList.add("not-valid");

        //don't worry about the below syntax! you will see more of it in the MERN stack
        setTimeout(()=>{
            userInput.classList.remove("not-valid");
        },1500)
    }
    console.log("will this print before or after the timer?");
}

function askQuestionEnd(){
    userInput.value = "";
    userInput.focus();

    conchShell.src = "img/conchStill.png";
    response.innerText = eightBall();
}

function eightBall() {
    var lifesAnswers = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.',
    ];
    var i = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[i];
}