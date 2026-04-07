// Poemas con transición lenta
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
        }, 2000); // 2 segundos de espera para la difuminación
    }
}
setInterval(rotatePoetry, 7000); // Se queda 7 segundos cada poema
rotatePoetry();

// Formulario corregido para enviar TODO
document.getElementById('settForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura explícita de valores
    const nombre = document.getElementById('nombre').value;
    const interes = document.getElementById('interes').value;
    const modalidad = document.getElementById('modalidad').value;
    const horario = document.getElementById('horario').value;

    const tel = "522721076629";
    
    // Construcción del mensaje con codificación estricta
    const texto = `Hola *SETT & Co. Linguistic Services*, me gustaría agendar una reunión.%0A%0A` +
                  `*Prospecto:* ${nombre}%0A` +
                  `*Interés:* ${interes}%0A` +
                  `*Modalidad:* ${modalidad}%0A` +
                  `*Horario propuesto:* ${horario}`;

    window.open(`https://wa.me/${tel}?text=${texto}`, '_blank');
});