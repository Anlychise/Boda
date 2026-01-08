// Establece la fecha del evento
const weddingDate = new Date('2026-10-03T17:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.querySelector('.countdown .timer').innerHTML =
      '<div><span>0</span><small>Días</small></div>' +
      '<div><span>0</span><small>Horas</small></div>' +
      '<div><span>0</span><small>Minutos</small></div>' +
      '<div><span>0</span><small>Segundos</small></div>';
    clearInterval(timerInterval);
    return;
  }

  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / (1000 * 60)) % 60;
  const hrs = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hrs;
  document.getElementById('minutes').textContent = min;
  document.getElementById('seconds').textContent = sec;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();



// Manejador de envío del formulario
document.querySelector('.rsvp-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por confirmar! Hemos recibido tus datos.');
  e.target.reset();
});
