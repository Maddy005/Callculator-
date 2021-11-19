var output =document.getElementById("c");

function Display(num){
    output.value += num;
}
function total(){
    try{
        output.value =eval(output.value);
    }
    catch(err){
        alert("invalid");
    }
}

function cle(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}