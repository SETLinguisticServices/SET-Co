// Navegación de secciones (Transición .5s)
function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => {
        s.classList.remove('active');
        s.style.opacity = "0";
        setTimeout(() => { s.style.display = 'none'; }, 500);
    });
    
    setTimeout(() => {
        const target = document.getElementById(id);
        if(target) {
            target.style.display = 'block';
            window.scrollTo(0, 0);
            setTimeout(() => { target.classList.add('active'); target.style.opacity = "1"; }, 50);
        }
    }, 550);
}

// Poemas con Efecto de Barrido (Sweep)
const poems = [
    { text: "I started Early – Took my Dog –\nAnd visited the Sea –\nThe Mermaids in the Basement\nCame out to look at me –", author: "Dickinson" },
    { text: "I am the master of my fate,\nI am the captain of my soul.", author: "Henley" },
    { text: "The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep.", author: "Frost" },
    { text: "Hope is the thing with feathers\nThat perches in the soul.", author: "Dickinson" }
];

let currentPoem = 0;
function rotatePoetry() {
    const el = document.getElementById('poetry-text');
    if(!el) return;
    
    // Fase de salida
    el.classList.remove('active-poem');
    el.classList.add('exit-poem');
    
    setTimeout(() => {
        const p = poems[currentPoem];
        el.textContent = `${p.text}\n\n— ${p.author}`;
        
        // Preparar entrada
        el.classList.remove('exit-poem');
        
        // Fase de entrada
        setTimeout(() => {
            el.classList.add('active-poem');
            currentPoem = (currentPoem + 1) % poems.length;
        }, 50);
        
    }, 800); // Duración de la animación de salida
}
setInterval(rotatePoetry, 9000); // Ciclo total más largo para acomodar barrido
rotatePoetry(); // Primera carga

// Lógica de Overlays de Servicios (Nueva Ventana)
function openFullService(type) {
    const overlay = document.getElementById(`${type}-overlay`);
    if(overlay) {
        overlay.style.display = 'block';
        setTimeout(() => { overlay.classList.add('active-overlay'); }, 50);
        document.body.style.overflow = 'hidden'; // Bloquea scroll del fondo
    }
}

function closeFullService() {
    const overlays = document.querySelectorAll('.service-overlay');
    overlays.forEach(o => {
        o.classList.remove('active-overlay');
        setTimeout(() => { o.style.display = 'none'; }, 500);
    });
    document.body.style.overflow = ''; // Restaura scroll
}

// Cerrar con ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { closeFullService(); }
});

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}* el dd/mm/aa a las ________am/pm.\nGracias,\nNombre y apellido de preferencia.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}