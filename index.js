function handleClick(num){
    document.getElementById("value").value = document.getElementById("value").value+num;
}

function handleEval(){
    var exp = document.getElementById("value").value ;
    if(exp){
        document.getElementById("value").value = eval(exp)
    }
}
function backSpace(){
    var exp = document.getElementById("value").value ;
    document.getElementById("value").value = exp.substring(0,exp.length-1); 
}

function del(){
    document.getElementById("value").value = "";
}

function root(){
    var exp = document.getElementById("value").value;
    document.getElementById("value").value =  Math.sqrt(exp);
}