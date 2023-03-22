function calcular(){
    var height = (document.getElementById("height").value) / 100;
    var weight  = document.getElementById("weight ").value;
};

let imc = (weight  / height ** 2);
if (imc < 18.5){
        window.alert("vc ta na merda")
    };