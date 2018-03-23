function Variables(){
    var mensaje = document.getElementById("text_id").value;

    alert("La variable equivale a: " + mensaje);
}

class Poligono{
    constructor(heigth, width){
        this.heigth = heigth;
        this.width = width;
    }

    get area(){    
        return this.calArea();
    }
    calArea(){
        return this.heigth* this.width;
    }
}

function CalcularArea(){
    var width = document.getElementById("width_number").value;
    var heigth = document.getElementById("height_number").value;

    const cuadrado = new Poligono(width, heigth);

    alert("El area del cuadrado es: " + cuadrado.area);
}

function ConParametrosRetorno(valor1, valor2){
    var nombre = document.getElementById("name").value;
    var edad = document.getElementById("edad").value;

    var sum = nombre+ edad;
    return alert(sum);
}

$(document).ready(function(){
    $("button").click(function(){
        var div = $("#jquey");
        div.animate({height: '100px', opacity: '0.4'}, "slow")
        div.animate({width: '550px', opacity: '0.8'}, "slow")
        div.animate({height: '50px', opacity: '0.4'}, "slow")
        div.animate({width: '50px', opacity: '0.8'}, "slow")
    })
})