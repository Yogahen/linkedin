document.getElementById('sendBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusDiv = document.getElementById('status');

  if (!name) {
    statusDiv.textContent = "Masukkan nama target terlebih dahulu!";
    statusDiv.style.color = "red";
    return;
  }

  if (!message) {
    statusDiv.textContent = "Tulis pesan singkat sebelum mengirim!";
    statusDiv.style.color = "red";
    return;
  }

  statusDiv.textContent = `Permintaan koneksi ke ${name} terkirim dengan pesan: "${message}"`;
  statusDiv.style.color = "green";
});
