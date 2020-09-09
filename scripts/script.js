function n1(){
    var nu1 = "1"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n2(){
    var nu1 = "2"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n3(){
    var nu1 = "3"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n4(){
    var nu1 = "4"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n5(){
    var nu1 = "5"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n6(){
    var nu1 = "6"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n7(){
    var nu1 = "7"
    var nvt = document.getElementById("tela")
    nvt.innerHTML += nu1 
}
function n8(){
    var nu1 = "8"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n9(){
    var nu1 = "9"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function n0(){
    var nu1 = "0"
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function pi(){
    var nu1 = "3,1415926"
    var nvt = document.getElementById("tela")
    nvt.textContent = nu1
}
function virg(){
    var nu1 = ","
    var nvt = document.getElementById("tela")
    nvt.textContent += nu1 
}
function op1(){
    var nvt = document.getElementById("tela")
    numero1 = document.getElementById("tela").textContent
    operacao = "+"
    nvt.innerHTML = "" 
}
function op2(){
    var nvt = document.getElementById("tela")
    numero1 = document.getElementById("tela").textContent
    operacao = "-"
    nvt.innerHTML = "" 
}
function op3(){
    var nvt = document.getElementById("tela")
    numero1 = document.getElementById("tela").textContent
    operacao = "&divide;"
    nvt.innerHTML = ""     
}
function op4(){
    var nvt = document.getElementById("tela")
    numero1 = document.getElementById("tela").textContent
    operacao = "&times;"
    nvt.innerHTML = ""     
}
var numero1 = ""
var operacao = ""
function igual(){
    if (operacao=="+"){
        var numero2 = document.getElementById("tela").textContent
        var nvn1 = Number(numero1.replace(',','.'))
        var nvn2 = Number(numero2.replace(',','.'))
        var nvt = document.getElementById('tela')
        nvt.innerHTML = `${numero1.replace('.',',')}</br>${operacao}</br>${numero2.replace('.',',')}`
        var igual = document.getElementById("tela1")
        var result = nvn1+nvn2
        igual.textContent = result.toFixed(4).toString().replace('.',',')
    }else if (operacao=="-"){
        var numero2 = document.getElementById("tela").textContent
        var nvn1 = Number(numero1.replace(',','.'))
        var nvn2 = Number(numero2.replace(',','.'))
        var nvt = document.getElementById('tela')
        nvt.innerHTML = `${numero1.replace('.',',')}</br>${operacao}</br>${numero2.replace('.',',')}`
        var igual = document.getElementById("tela1")
        var result = nvn1-nvn2
        igual.textContent = result.toFixed(4).toString().replace('.',',')
    }else if (operacao=="&divide;"){
        var numero2 = document.getElementById("tela").textContent
        var nvn1 = Number(numero1.replace(',','.'))
        var nvn2 = Number(numero2.replace(',','.'))
        var nvt = document.getElementById('tela')
        nvt.innerHTML = `${numero1.replace('.',',')}</br>${operacao}</br>${numero2.replace('.',',')}`
        var igual = document.getElementById("tela1")
        var result = nvn1/nvn2
        igual.textContent = result.toFixed(4).toString().replace('.',',')
    }else if (operacao=="&times;"){
        var numero2 = document.getElementById("tela").textContent
        var nvn1 = Number(numero1.replace(',','.'))
        var nvn2 = Number(numero2.replace(',','.'))
        var nvt = document.getElementById('tela')
        nvt.innerHTML = `${numero1.replace('.',',')}</br>${operacao}</br>${numero2.replace('.',',')}`
        var igual = document.getElementById("tela1")
        var result = nvn1*nvn2
        igual.textContent = result.toFixed(4).toString().replace('.',',')
    }
}
function reset(){
    numero1 = " "
    numero2 = " "
    operacao = " "
    var nvt = document.getElementById("tela")
    var nvt1= document.getElementById("tela1")
    nvt.textContent = " "
    nvt1.textContent = " "
}