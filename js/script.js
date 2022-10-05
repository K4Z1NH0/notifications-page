
let checkbox = document.getElementById ('muda')

function muda(){
if(checkbox.checked) {
    document.getElementById("n-notification").innerHTML ="0";
    document.getElementById ("ball-red-mark").style.display = "none";
    document.getElementById ("ball-red-angela").style.display = "none";
    document.getElementById ("ball-red-jacob").style.display = "none";
} else {
    console.log("O cliente não marcou o checkbox");
}

}