function copyIBAN() {
  const ibanText = document.getElementById('iban').innerText;
  navigator.clipboard.writeText(ibanText).then(() => {
    const message = document.getElementById('copy-message');
    message.innerText = 'IBAN copiato!';
    setTimeout(() => { message.innerText = ''; }, 2000);
  });
}
