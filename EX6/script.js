const container = document.getElementById('container');

window.onload = function() {
    container.focus();
    let count = Math.floor(Math.random() * 3); 
    container.innerText = generateRandomString(count);
};

window.addEventListener("keyup",function(e){
    let currentText = container.innerText;
    console.log(e.key);
    if (currentText.length > 0 && e.key === currentText[0]) {
        container.innerText = currentText.substring(1);
    }
    if (container.innerText.length === 0) {
            add_new_chars();
    }
});

function add_new_chars(){
    let count = Math.floor(Math.random() * 3) + 1;
    let newChars = generateRandomString(count);
    container.innerText += newChars;
};
function generateRandomString(len) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let i = 0; i < len; i++) {
        res += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return res;
}