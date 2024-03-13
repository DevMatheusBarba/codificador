
let msgOriginal = null
let msgAlterada = null
const verificaMaiuscula = (string) => /[A-Z]/.test(string);
const verificaCharEspecial = (string) => /[^a-zA-Z ]/.test(string);
let informacao = document.querySelector(".informacao")

let btnCriptografa = [...document.querySelectorAll(".btnsCriptografaDescriptografa")]

btnCriptografa.map((e, i) => {
    e.addEventListener("click", (evt) => {
        let acionador = evt.target
        capturarTexto(acionador)
    })

})

function capturarTexto(param) {
    let capturandoMsg = document.querySelector("#textoInserido").value
    validaTexto(capturandoMsg, param)
}

function validaTexto(params, evento) {
    if (params != "") {
        if (verificaMaiuscula(params) || verificaCharEspecial(params)) {
            criaAlert()
        } else {
            msgOriginal = params
            alteraMsg(msgOriginal, evento)
        }
    } else {
        alert("Mensagem vazia!")
    }
}

function criaAlert() {
    let novoElement = document.createElement("div")
    novoElement.setAttribute("class", "alert ")
    novoElement.classList.add("alert-danger", "alert-dismissible", "text-center")
    novoElement.innerHTML = "Letra maiuscula, numéro, Caractere especial ou quebra de linha encontrado!<br>Revise a mensagem"

    let btnClose = document.createElement("button")
    btnClose.setAttribute("data-bs-dismiss", "alert")
    btnClose.classList.add("btn-close")

    novoElement.appendChild(btnClose)
    informacao.appendChild(novoElement)

}

function alteraMsg(param, evt) {
    let msg = param
    if (evt.innerHTML == "Criptografar") {
        msgAlterada = msg.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat")

    } else {
        msgAlterada = (msg.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u"))
    }
    mostraNaTela()
}

function mostraNaTela() {
    let msgAlteravel = document.querySelector(".msgCriptografada")
    msgAlteravel.innerHTML = msgAlterada
    msgAlterada = null
    msgAlteravel.classList.remove("invisible")
    modificaElementos()
}

function modificaElementos() {

    let imagemLayout = document.querySelector(".layout__cel-img")
    imagemLayout.classList.add("invisible")

    let containerPage = document.querySelector(".layout__cel-container")
    if (screen.width >= 768 ) {
        containerPage.classList.add("d-none")
    } else {

        containerPage.classList.add("invisible")
    }


    let btnCopy = document.querySelector(".layout__cel-btnCopy")
    btnCopy.classList.remove("d-none")
}




function copiarTexto() {
    navigator.clipboard.writeText(document.querySelector(".msgCriptografada").innerHTML)
    
}
