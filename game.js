

var player_1= localStorage.getItem("Player1",player_1);
var player_2= localStorage.getItem("Player2",player_2);
var question_turn= "player_1";
var answer_turn= "player_2";
console.log(player_1);
console.log(player_2);
document.getElementById("player_name1").innerHTML = player_1 + ": ";
document.getElementById("player_name2").innerHTML = player_2 + ": ";
document.getElementById("question").innerHTML =" " +player_1;
document.getElementById("answer").innerHTML = " " +player_2;



var p1_score= 0;
var p2_score= 0;

function send(){
     number_one= document.getElementById("number1_input").value;
     number_two= document.getElementById("number2_input").value;
     solution= parseInt(number_one)*parseInt(number_two);
    console.log(number_one);
console.log(number_two);
var question_number= '<label>'+number_one+ ' x ' +number_two+ '</label>';

var input_box= "<br> Answer: <input type='text' id='answer_input'>";
var check_button= "<br><br><button class='btn btn-info' onclick='check()'> Check </button";
var row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1_input").value= "";
document.getElementById("number2_input").value = "";

}
function check(){
   var answer_given= document.getElementById("answer_input").value;
   if(answer_given ==solution){
       if(answer_turn == "player_1"){
           update_player1_score= p1_score +1;
           document.getElementById('score1').innerHTML= update_player1_score;
       }
       else{
        update_player2_score= p2_score +1;
        document.getElementById("score2").innerHTML= update_player2_score;
    
       }
    }
    if(question_turn== "player_1"){
        question_turn= "player_2";
        document.getElementById("question").innerHTML= player_2;
    }
    else{
        question_turn= "player_1";
        document.getElementById("question").innerHTML=player_1;
    }
    if(answer_turn== "player_1"){
        answer_turn= "player_2";
        document.getElementById("answer").innerHTML=player_2;
    }
    else{
        answer_turn= "player_1";
        document.getElementById("answer").innerHTML=player_1;
    }
    document.getElementById("output").innerHTML = "";
}
