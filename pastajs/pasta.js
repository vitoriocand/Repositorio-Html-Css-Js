function clicar() {
    let user = document.querySelector("input#txtn").value
    let senha = document.querySelector("input#txts").value

    if (user === "vitorio" && senha === "1234") {
        alert("tudo ok")
    } else {
        alert("[ERRO]senha incorreta!!!")
    }
}
