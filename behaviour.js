var menuBar = document.getElementById("menu_bar");
var menuBtn = document.getElementById("menu_button");
var menulist = document.getElementById("menu_list");
var isMenuDisplayed = false;

function toggleMenu(){
    if (isMenuDisplayed){
        menuBar.style.position = 'absolute';
        menuBtn.style.position = 'absolute';
        menulist.style.visibility = 'hidden';
    } else {
        menuBar.style.position = 'relative';
        menuBtn.style.position = 'relative';
        menulist.style.visibility = 'visible';
    }

    isMenuDisplayed = !isMenuDisplayed;
}

var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var messageField = document.getElementById("message");

function sendMessage(event){
    if (nameField.value === '' || emailField.value === '' || messageField.value === ''){ return; }
    window.confirm(`
Mensagem pronta para ser enviada por e-mail!

- Conteúdo -
Nome: ${nameField.value}
Email: ${emailField.value}
Mensagem: ${messageField.value}
`)
    document.location.href = `mailto:jean.arthursa@gmail.com?subject=Olá, me chamo ${encodeURIComponent(nameField.value)}&body=${encodeURIComponent(messageField.value)}`
}