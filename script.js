function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
}

// Poemas con saltos de línea específicos (\n) para respetar la métrica
const poems = [
    "I started Early – Took my Dog –\nAnd visited the Sea –\nThe Mermaids in the Basement\nCame out to look at me –",
    "I am the master of my fate,\nI am the captain of my soul.",
    "The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep.",
    "Hope is the thing with feathers\nThat perches in the soul."
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

// Envío directo a WhatsApp sin formulario intermedio
function sendDirectWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*, me gustaría solicitar una reunión de presentación para la filial: *${filial}*.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}