function encrypt() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const encryptedText = inputText
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    document.getElementById('outputText').textContent = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const decryptedText = inputText
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    document.getElementById('outputText').textContent = decryptedText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar al portapapeles:', err));
}
