let slider = document.getElementById("slider");
let button = document.getElementById("button");
let valor = document.getElementById("valor");
let passwordText = document.getElementById("password");
let containerPassword = document.getElementById("container-password");

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()";

valor.innerHTML = slider.value;

slider.oninput = function() {
    valor.innerHTML = this.value;
}

function gerarSenha() {
    let senha = "";
    let tamanho = slider.value;

    for (let i = 0; i < tamanho; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    return senha;
}

button.onclick = function() {
    let novaSenha = gerarSenha();

    passwordText.innerHTML = novaSenha;
    containerPassword.classList.remove("hide");
}

containerPassword.onclick = function() {
    navigator.clipboard.writeText(passwordText.innerHTML);
    alert("Senha copiada!");
}