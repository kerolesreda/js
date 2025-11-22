function rsp(p1,p2){
if(p1===p2) return"Draw!";
const wins ={
    scissors: "paper",
    rock :"scissors",
    paper : "rock",
}
return wins[p1] ===p2?"Player 1 won!":"Player 2 won!";

}

console .log (rsp("scissors", "paper"));
console .log (rsp("scissors", "rock"));
console .log (rsp("paper", "paper"));