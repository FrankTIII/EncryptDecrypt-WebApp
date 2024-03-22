function removeBackground() {
    var textarea = document.getElementById('mensaje');
    textarea.style.backgroundImage = 'none';
  }

function encrypt() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    const encryptedText = inputText
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    removeBackground();
    document.getElementById('mensaje').textContent = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    const decryptedText = inputText
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    document.getElementById('mensaje').textContent = decryptedText;
}

function copyToClipboard() {
    const outputText = document.getElementById('mensaje').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => console.log('Texto copiado al portapapeles'+outputText))
        .catch(err => console.error('Error al copiar al portapapeles:', err));


        
}


/*let text = document.getElementById('outputText').textContent/*.innerHTML;
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }*/