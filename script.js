const note = document.getElementById('note');
const count = document.getElementById('count');

note.addEventListener('input', () => {
  count.textContent = note.value.length;
});

function cancel() {
  note.value = '';
  count.textContent = 0;
  alert('Invitation canceled.');
}

function send() {
  if (note.value.trim() === '') {
    alert('Please write a note before sending.');
    return;
  }
  alert('Invitation sent with note:\n\n' + note.value);
  note.value = '';
  count.textContent = 0;
}

