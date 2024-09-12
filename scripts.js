function revealGift(element) {
    const coverImage = element.querySelector('.cover');
    const hiddenImage = element.querySelector('.hidden');
    
    coverImage.style.display = 'none';
    hiddenImage.style.display = 'block';
}

// Definimos la fecha del cumpleaños
const countdownDate = new Date("Sep 12, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        // Si ya pasó la fecha del cumpleaños
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        const birthdayMessage = document.getElementById("birthday-message");
        birthdayMessage.innerText = "¡El cumpleaños ya ha llegado!";
        birthdayMessage.style.display = "block";

        // Añadir confeti
        const countdownContainer = document.querySelector('.countdown-container');
        if (!countdownContainer.querySelector('.confetti')) {
            for (let i = 0; i < 10; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                countdownContainer.appendChild(confetti);
            }
        }

        clearInterval(countdownFunction);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizamos el contador con animaciones suaves
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        // Ocultamos el mensaje de cumpleaños
        document.getElementById("birthday-message").style.display = "none";
    }
}, 1000);

// Función para mostrar la hora actual en Argentina en formato 24h
function showArgentinaTime() {
    const options = { 
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const argentinaTime = new Date().toLocaleString('es-AR', options);
    document.getElementById("argentina-time").innerText = argentinaTime;
}

// Actualizar la hora de Argentina cada segundo
setInterval(showArgentinaTime, 1000);

// Inicializar la hora de Argentina
showArgentinaTime();