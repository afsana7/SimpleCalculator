function clr(){
    document.getElementById("result").value=""
}
function disp(num){
    document.getElementById("result").value+=num
}
function solve() 
         { 
             let num1 = document.getElementById("result").value 
             let num2 = eval(num1) 
             document.getElementById("result").value = num2 
         } 