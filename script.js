const result = document.getElementById("result");
const btns = document.querySelectorAll('.btn');
let input = "";

btns.forEach((btn) => {
    btn.addEventListener("click",function(){
        if(btn.value=="="){
            input=eval(input)
            result.value=input
        }
        else if(btn.value=="c"){
            input=""
            result.value=input
        }
        else{
            input = input + btn.value;
            result.value = input;
        }
        
    })
});