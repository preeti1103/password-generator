function generatePassword() {

    let chars = "abcdefghijklmnopqrstuvwxyz";

    const upper = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    let lengthElement = document.getElementById('length');
    const length = lengthElement.value;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        const randomCharacter = chars[randomIndex];
        password = password + randomCharacter;
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    // Get the password input box
    const password = document.getElementById('password').value;

    // Copy the selected text to clipboard
    navigator.clipboard.writeText(password);


    // Show message
    alert("Password copied!");
}
