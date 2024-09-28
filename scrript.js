

function play(userSelection){
    const choices = ["rock", "paper", "scissor"];
    const randomSelection=Math.floor(Math.random()*3);
    const computerSelection=choices[randomSelection];
    let result=document.getElementById('result');

if(userSelection===computerSelection){
    result.textContent="Wow! Its a tie.";
    
}
else if(
    (userSelection==='rock' && computerSelection==='scissor')||
    (userSelection==='scissor' && computerSelection==='paper')||
    (userSelection==='paper' && computerSelection==='rock')   

){
    result.textContent="Congrats! you win from computer💪";
}

else{
    result.textContent="Oops you lose from computer! Try again ";

}

}
function reloadPage(){
    window.location.reload();
}