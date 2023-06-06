function verificar () {
    let num = document.getElementById('number').value
    let number = Number(num)

    if(number % 2 == 0){
        document.getElementById("resposta").innerHTML = "O número digitado é par"
    }
    else{
        document.getElementById("resposta").innerHTML = "O número digitado é impar"
    }
}
