// Transición de Poemas
const poems = [
    "I started Early – Took my Dog – And visited the Sea...",
    "I am the master of my fate, I am the captain of my soul.",
    "The woods are lovely, dark and deep, But I have promises to keep.",
    "Hope is the thing with feathers that perches in the soul."
];

let currentPoem = 0;
function rotatePoetry() {
    const textElement = document.getElementById('poetry-text');
    if(textElement) {
        textElement.style.opacity = 0;
        setTimeout(() => {
            textElement.textContent = poems[currentPoem];
            textElement.style.opacity = 1;
            currentPoem = (currentPoem + 1) % poems.length;
        }, 1000);
    }
}
setInterval(rotatePoetry, 5000);
rotatePoetry();

// Lógica de Formulario
function toggleInputs() {
    const interes = document.getElementById('interes').value;
    const horarios = document.getElementById('horarios-container');
    // Si es traducción, podríamos ocultar horarios si prefieres, 
    // pero lo mantendremos visible como pediste con un tono consultivo.
}

document.getElementById('settForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const interes = document.getElementById('interes').value;
    const modalidad = document.getElementById('modalidad').value;
    const horario = document.getElementById('horario').value;

    const mensaje = `Hola *SETT & Co. Linguistic Services*, me gustaría agendar una reunión de presentación.%0A%0A` +
                    `*Interés:* ${interes}%0A` +
                    `*Prospecto:* ${nombre}%0A` +
                    `*Modalidad:* ${modalidad}%0A` +
                    `*Horario propuesto:* ${horario}`;

    window.open(`https://wa.me/522721076629?text=${mensaje}`, '_blank');
});