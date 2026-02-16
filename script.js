
document.getElementById('copy-iban').addEventListener('click', () => {
  const ibanText = document.getElementById('iban-text').textContent.replace('Iban: ', '');
  
  navigator.clipboard.writeText(ibanText)
    .then(() => {
      alert('IBAN copiato!');
    })
    .catch(() => {
      alert('Errore nel copiare l’IBAN');
    });
});
