//QUESTION 1:

/* 
var userNumber = window.prompt("Enter a number");
console.log(userNumber);
*/


//QUESTION 2:
/*
var userNumber = window.prompt("Enter a number");
if(userNumber%3==0 && userNumber%4==0){
    console.log("yes");
}else{
    console.log("no");
}*/



//QUESTION 3:
/*
var firstNumber = window.prompt("Enter first number");
var secondNumber = window.prompt("Enter second number");
var max=0;

if(Number(firstNumber) > Number(secondNumber)){
    max = firstNumber;
}else{
    max =secondNumber;
}

console.log(max)*/

//QUESTION 4:
/*
var userNumber = window.prompt("Enter a number");

if(Number(userNumber)<0){
    console.log("negative")
}else{
    console.log("positive")
}*/

//QUESTION 5:
/*
var firstNumber = window.prompt("Enter first number");
var secondNumber = window.prompt("Enter second number");
var thirdNumber = window.prompt("Enter third number");
var min , max=0;
if(Number(firstNumber)> Number(secondNumber) && Number(firstNumber)> Number(thirdNumber)&& Number(secondNumber)> Number(thirdNumber) ){
 max =firstNumber;
 min=thirdNumber;
}else if(Number(firstNumber)> Number(secondNumber) && Number(firstNumber)> Number(thirdNumber)&& Number(secondNumber)< Number(thirdNumber) ){
    max =firstNumber;
    min=secondNumber;
}else if(Number(firstNumber)< Number(secondNumber) && Number(secondNumber)> Number(thirdNumber)&& Number(firstNumber)> Number(thirdNumber)){
    max=secondNumber;
    min=thirdNumber;
}else if(Number(firstNumber)< Number(secondNumber) && Number(secondNumber)> Number(thirdNumber)&& Number(firstNumber)< Number(thirdNumber)){
    max=secondNumber;
    min=firstNumber;
}else if(Number(thirdNumber)> Number(firstNumber) && Number(thirdNumber)> Number(secondNumber)&& Number(firstNumber)> Number(secondNumber)){
    max=thirdNumber;
    min=secondNumber
}else if(Number(thirdNumber)> Number(firstNumber) && Number(thirdNumber)> Number(secondNumber)&& Number(firstNumber)< Number(secondNumber)){
    max=thirdNumber;
    min=firstNumber
}
console.log("max =>",max)
console.log("min =>",min)*/

//QUESTION 6:
/*
var userNumber = window.prompt("Enter a number");
if(Number(userNumber)%2==0)
{
    console.log("even")
}else{
    console.log("odd")
}*/ 


//QUESTION 8:
/*
var userChar = window.prompt("Enter the character");
if(userChar=='a' || userChar=='e' || userChar=='i' || userChar=='o' || userChar=='u'){
    console.log("vowel")
}else{
    console.log("Consonant")
}*/


//QUESTION 9:
/*
var userNumber = window.prompt("Enter a number");

for(var i=1 ; i<=Number(userNumber); i++){
    console.log(i)

}*/

//QUESTION 10:
/*
var userNumber = window.prompt("Enter a number");
for(var i=1; i<=12 ;i++){
    console.log(userNumber*i)
}*/

//QUESTION 11:
/*
var userNumber = window.prompt("Enter a number");
for(var i=1; i<userNumber ;i++){
    if(i%2==0){
        console.log(i)
    }
}*/

//QUESTION 12:
/*
var firstNumber = window.prompt("Enter first number");
var secondNumber = window.prompt("Enter second number");
var result=1;
for(var i=1; i<=secondNumber ; i++)
{
    result *=firstNumber;
}
console.log(result);*/

//QUESTION 12:
/*
var firstNumber = window.prompt("Enter first number");
var secondNumber = window.prompt("Enter second number");
var thirdNumber = window.prompt("Enter third number");
var fourthNumber = window.prompt("Enter fourth number");
var fifthNumber = window.prompt("Enter fifth number");
 var total = Number(firstNumber)+Number(secondNumber)+Number(thirdNumber)+Number(fourthNumber)+Number(fifthNumber);
 var avrg = (Number(firstNumber)+Number(secondNumber)+Number(thirdNumber)+Number(fourthNumber)+Number(fifthNumber))/5;
 var percentage = (total/500)*100;
console.log('Total =', total);
console.log('Average =', avrg);
console.log('Percentage =', percentage);*/


//QUESTION 13:
/*
var monthNumber = window.prompt("Enter month number:");
switch (monthNumber) {
    
    case "1":
            console.log(31)
            break;

    case "2":
        console.log(28)
        break;

    case "3":
        console.log(31)
        break;

    case "4":
        console.log(30)
        break;

    case "5":
        console.log(31)
        break;

    case "6":
        console.log(30)
        break;

    case "7":
        console.log(31)
        break;

    case "8":
        console.log(31)
        break;

    case "9":
        console.log(30)
        break;

    case "10":
        console.log(31)
        break;

    case "11":
        console.log(30)
        break;

    case "12":
        console.log(31)
        break;

    default:
        break;
}*/


//QUESTION 14:
/*
var physics = window.prompt("Enter physics mark");
var chemistry = window.prompt("Enter chemistry mark");
var biology = window.prompt("Enter biology mark");
var math = window.prompt("Enter math mark");
var computer = window.prompt("Enter computer mark");
 var total = Number(physics)+Number(chemistry)+Number(biology)+Number(math)+Number(computer);
 var percentage = (total/500)*100;
 var Grad;
 if(percentage>=90){
    Grad='A';

 }else if(percentage>=80){
    Grad='B';

 }else if(percentage>=70){
    Grad='C';

 }else if(percentage>=60){
    Grad='D';

 }else if(percentage>=40){
    Grad='E';

 }else if(percentage<40){
    Grad='F';

 }
 console.log("Percentage =>"+percentage+ "% " +"Grade:",Grad)
*/



//QUESTION 15:
/*
var monthNumber = window.prompt("Enter month number:");
switch (monthNumber) {
    
    case "1":
            console.log(31)
            break;

    case "2":
        console.log(28)
        break;

    case "3":
        console.log(31)
        break;

    case "4":
        console.log(30)
        break;

    case "5":
        console.log(31)
        break;

    case "6":
        console.log(30)
        break;

    case "7":
        console.log(31)
        break;

    case "8":
        console.log(31)
        break;

    case "9":
        console.log(30)
        break;

    case "10":
        console.log(31)
        break;

    case "11":
        console.log(30)
        break;

    case "12":
        console.log(31)
        break;

    default:
        break;
}*/

//QUESTION 16:
/*
var enteredChar = window.prompt("Enter the character");
switch (enteredChar) {
    case 'a':
        console.log("vowel")
        break;
    case 'e':
        console.log("vowel")
        break;
    case 'i':
        console.log("vowel")
        break;
    case 'o':
        console.log("vowel")
        break;
    case 'u':
        console.log("vowel")
        break;

    default:
        console.log("consonant")
        break;
}*/


//QUESTION 17:
/*
var firstnum = window.prompt("Enter first number");
var secondnum = window.prompt("Enter second number");
var max=0;
switch (Number(firstnum)>Number(secondnum)) {
    case true:
        max=firstnum;
        break;
    case false:
        max=secondnum;
        break;
        
    default:
        break;
}
console.log(max);
*/

//QUESTION 18:
/*
var userNumber = window.prompt("Enter number");
switch (Number(userNumber)%2==0) {
    case true:
        console.log("even")
        break;
    case false:
        console.log("odd")
        break;

    default:
        break;
}*/



//QUESTION 19:
/*
var userNumber = window.prompt("Enter number");
switch (Number(userNumber)>0) {
    case true:
        console.log("positive")
        break;
    case false:
        console.log("negative")
        break;

    default:
        break;
}*/

//QUESTION 20:
/*
var firstnum = window.prompt("Enter first number");
var secondnum = window.prompt("Enter second number");
var operation =window.prompt("Enter the operation (+,-,*,/,%)");
var result=0;
switch (operation) {
    case "+":
        result = Number(firstnum)+Number(secondnum);
        console.log(result);
        break;
    case "-":
        result = Number(firstnum)-Number(secondnum);
        console.log(result);
        break;
    case "*":
        result = Number(firstnum)*Number(secondnum);
        console.log(result);
        break;
    case "/":
        result = Number(firstnum)/Number(secondnum);
        console.log(result);
        break;
    case "%":
        result = Number(firstnum)%Number(secondnum);
        console.log(result);
        break;

    default:
        break;
}*/





