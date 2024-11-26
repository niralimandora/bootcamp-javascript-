function cal(sign){
    sig = sign;
    console.log(typeof sig)
    switch(sig){
        case '+':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1+num2);
            break;
        case '-':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1-num2);
            break;
        case '*':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1*num2);
            break;
        case '/':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1/num2);
            break;
        default:
            document.getElementById('result').innerHTML ="enter value only allowed + - * /";
       
    }

}

function main(){
    var sign = document.getElementById('sign').value;
    cal(sign);

}