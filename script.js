function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => {
        s.classList.remove('active');
        s.style.opacity = "0";
        setTimeout(() => { s.style.display = 'none'; }, 1500);
    });
    
    setTimeout(() => {
        const target = document.getElementById(id);
        if(target) {
            target.style.display = 'block';
            window.scrollTo(0, 0); // Sube al inicio automáticamente
            setTimeout(() => { target.classList.add('active'); target.style.opacity = "1"; }, 50);
        }
    }, 1500);
}

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

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}* el dd/mm/aa a las ________am/pm.\nGracias,\nNombre y apellido de preferencia.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}