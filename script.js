// Navegación infalible
function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(id);
    if(target) {
        target.classList.add('active');
    }
}

// Poemas (Se expanden a todo el ancho disponible)
const poems = [
    "I started Early – Took my Dog – And visited the Sea – The Mermaids in the Basement Came out to look at me –",
    "I am the master of my fate, I am the captain of my soul.",
    "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep.",
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

// Modales y WhatsApp
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal() { document.querySelectorAll('.modal').forEach(m => m.style.display = "none"); }

function sendWA(event, type) {
    event.preventDefault();
    const tel = "522721076629";
    let msg = `Hola *SETT & CO. Linguistic Services*, solicito reunión para *${type}*:%0A%0A`;

    if(type === 'Academy') {
        msg += `*Nombre:* ${document.getElementById('name-ac').value}%0A*Modalidad:* ${document.getElementById('mod-ac').value}%0A*Horario:* ${document.getElementById('time-ac').value}`;
    } else {
        msg += `*Nombre:* ${document.getElementById('name-tr').value}%0A*Fecha:* ${document.getElementById('date-tr').value}%0A*Hora:* ${document.getElementById('time-tr').value}`;
    }
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}