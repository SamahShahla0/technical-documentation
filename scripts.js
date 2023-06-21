const copyIcons = document.querySelectorAll('.copy-icon');

function copyToClipboard(event) {
    const codeSnippet = event.target.previousSibling;
    const codeText = codeSnippet.innerText;

    navigator.clipboard.writeText(codeText)
        .then(() => {  
        event.target.classList.remove('copy-icon', 'fa', 'fa-copy');
        event.target.classList.add('fas', 'fa-check-circle');
        
        setTimeout(() => {
            event.target.classList.remove('fas', 'fa-check-circle');
            event.target.classList.add('copy-icon', 'fa', 'fa-copy');
          }, 2000);

        })
        .catch((error) => {
        console.error('Failed to copy code to clipboard:', error);
        });
}

copyIcons.forEach((icon) => {
icon.addEventListener('click', copyToClipboard);
});

