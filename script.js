var num1 = Math.ceil(Math.random()*20);
document.getElementById("face1").innerHTML = num1;

if(num1 % 4 == 0){
    document.getElementById("Msg1").innerHTML = "You rolled " + num1 + ". You <span class='text-success'> win</span>!";
}

else{
    document.getElementById("Msg1").innerHTML = "You rolled " + num1 + ". You <span class='text-danger'> lose</span>!";
}

var num2 = parseInt(Math.ceil(Math.random()*20));
document.getElementById("face2").innerHTML = num2;

if(num2 == 2){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 3){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 5){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 7){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 11){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 13){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 17){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else if(num2 == 19){
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-success'> win</span>!";
}

else{
    document.getElementById("Msg2").innerHTML = "You rolled " + num2 + ". You <span class='text-danger'> lose</span>!";
}

var num3 = parseInt(Math.ceil(Math.random()*20));
document.getElementById("face3").innerHTML = num3;

if(num3 == 0){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 1){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 2){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 3){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 5){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 8){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else if(num3 == 13){
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-success'> win</span>!";
}

else{
    document.getElementById("Msg3").innerHTML = "You rolled " + num3 + ". You <span class='text-danger'> lose</span>!";
}

var maxNum = Math.max(num1,num2,num3);
document.getElementById("bigNum").innerHTML = maxNum;

if(num1 == maxNum){
    if(num1 == num2){
        document.getElementById("whichOne").innerHTML = "from the yellow and green slots";
    }
    else if(num1 == num3){
        document.getElementById("whichOne").innerHTML = "from the yellow and blue slots";
    }
    else{
        document.getElementById("whichOne").innerHTML = "from the yellow slot";
    }
}

else if(num2 == maxNum){
    if(num2 == num3){
        document.getElementById("whichOne").innerHTML = "from the green and blue slots";
    }
    else{
        document.getElementById("whichOne").innerHTML = "from the green slot";
    }
}

else if(num3 == maxNum){
    document.getElementById("whichOne").innerHTML = "from the blue slot";
}

switch(num1){
    case 0:
        document.getElementById("letter").innerHTML = "A";
        break;
    case 1:
        document.getElementById("letter").innerHTML = "A";
        break;
    case 2:
        document.getElementById("letter").innerHTML = "B";
        break;
    case 3:
        document.getElementById("letter").innerHTML = "C";
        break;
    case 4:
        document.getElementById("letter").innerHTML = "D";
        break;
    case 5:
        document.getElementById("letter").innerHTML = "E";
        break;
    case 6:
        document.getElementById("letter").innerHTML = "F";
        break;
    case 7:
        document.getElementById("letter").innerHTML = "G";
        break;
    case 8:
        document.getElementById("letter").innerHTML = "H";
        break;
    case 9:
        document.getElementById("letter").innerHTML = "I";
        break;
    case 10:
        document.getElementById("letter").innerHTML = "J";
        break;
    case 11:
        document.getElementById("letter").innerHTML = "K";
        break;
    case 12:
        document.getElementById("letter").innerHTML = "L";
        break;
    case 13:
        document.getElementById("letter").innerHTML = "M";
        break;
    case 14:
        document.getElementById("letter").innerHTML = "N";
        break;
    case 15:
        document.getElementById("letter").innerHTML = "O";
        break;
    case 16:
        document.getElementById("letter").innerHTML = "P";
        break;
    case 17:
        document.getElementById("letter").innerHTML = "Q";
        break;
    case 18:
        document.getElementById("letter").innerHTML = "R";
        break;
    case 19:
        document.getElementById("letter").innerHTML = "S";
        break;
    case 20:
        document.getElementById("letter").innerHTML = "T";
        break;
}

var totalMin = num2 * num3;
var hour = Math.trunc(totalMin / 60);
var min = totalMin % 60;
document.getElementById("tMin").innerHTML = totalMin;
document.getElementById("nHour").innerHTML = hour;
document.getElementById("nMin").innerHTML = min;
