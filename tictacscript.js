var player =1;
var victory=-1;
var matrix=[
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]
function resetBoard(){
    for(i=0;i<document.querySelectorAll(".col").length;i++){
        document.querySelectorAll(".col")[i].innerHTML="";
    }
}
function playerMover(value,row,col){
    if(value.innerHTML !="")return;
    if(victory!=-1)return;
    matrix[row][col]=player;
    if(player==1){
        value.innerHTML="X";
        document.getElementById("notify").innerHTML="Player 1";
        player=2;

    }
    else if(player==2){
        value.innerHTML="O";
        document.getElementById("notify").innerHTML="Player 2";
        player=1;

    }
    for(var i=0;i<3;i++){
        if(matrix[i][0]==matrix[i][1] && matrix[i][1]==matrix[i][2])victory=matrix[i][0];//row
        if(matrix[0][i]==matrix[1][i] && matrix[1][i]==matrix[2][i])victory = matrix[0][i];//col

    }
    if(matrix[0][0]==matrix[1][1]==matrix[2][2]) victory=matrix[1][1];
    if(matrix[0][2]==matrix[1][1]==matrix[2][0]) victory=matrix[1][1];
    
    if(victory!=-1){
        alert("Player "+victory+ " Won");
        console.log("Victory");
    }

}
