// Navegación de Capas
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    const target = document.getElementById(sectionId);
    target.style.display = 'block';
    window.scrollTo(0, 0);
}

// Modales
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal() { document.querySelectorAll('.modal').forEach(m => m.style.display = "none"); }

// Poemas
const poems = [
    "I started Early – Took my Dog – And visited the Sea...",
    "I am the master of my fate, I am the captain of my soul.",
    "The woods are lovely, dark and deep, But I have promises to keep.",
    "Hope is the thing with feathers that perches in the soul."
];
let currentPoem = 0;
function rotatePoetry() {
    const el = document.getElementById('poetry-text');
    if(!el) return;
    el.style.opacity = 0;
    setTimeout(() => {
        el.textContent = poems[currentPoem];
        el.style.opacity = 1;
        currentPoem = (currentPoem + 1) % poems.length;
    }, 2000);
}
setInterval(rotatePoetry, 8000);
rotatePoetry();

// Envío a WhatsApp
function sendWA(event, type) {
    event.preventDefault();
    const tel = "522721076629";
    let msg = `Hola *SETT & CO. Linguistic Services*, solicito reunión para *${type}*:%0A%0A`;

    if(type === 'Academy') {
        const name = document.getElementById('name-ac').value;
        const mod = document.getElementById('mod-ac').value;
        const time = document.getElementById('time-ac').value;
        msg += `*Prospecto:* ${name}%0A*Modalidad:* ${mod}%0A*Horario sugerido:* ${time}`;
    } else {
        const name = document.getElementById('name-tr').value;
        const date = document.getElementById('date-tr').value;
        const time = document.getElementById('time-tr').value;
        msg += `*Nombre/Empresa:* ${name}%0A*Fecha:* ${date}%0A*Hora:* ${time}`;
    }

    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}