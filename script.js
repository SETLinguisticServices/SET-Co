// 1. Navegación con Cortina (Transición Líquida)
function navigate(id) {
    const curtain = document.getElementById('transition-curtain');
    curtain.classList.add('active');
    
    setTimeout(() => {
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
        
        const target = document.getElementById(id);
        if(target) {
            target.style.display = 'block';
            window.scrollTo(0, 0);
            target.classList.add('active');
            handleScroll(); // Disparar revelación inicial
        }
        
        curtain.classList.remove('active');
        curtain.classList.add('exit');
        setTimeout(() => { curtain.classList.remove('exit'); }, 600);
    }, 600);
}

// 2. Poemas: Escritura Mecánica (Typewriter)
const poems = [
    { text: "I started Early – Took my Dog –\nAnd visited the Sea –\nThe Mermaids in the Basement\nCame out to look at me –", author: "Dickinson" },
    { text: "I am the master of my fate,\nI am the captain of my soul.", author: "Henley" },
    { text: "The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep.", author: "Frost" },
    { text: "Hope is the thing with feathers\nThat perches in the soul.", author: "Dickinson" }
];

let poemIndex = 0;
function typePoem() {
    const el = document.getElementById('poetry-text');
    if(!el) return;
    
    let fullText = `${poems[poemIndex].text}\n\n— ${poems[poemIndex].author}`;
    let currentText = "";
    let charIndex = 0;
    el.textContent = "";

    function nextChar() {
        if (charIndex < fullText.length) {
            el.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(nextChar, 40); // Velocidad de escritura
        } else {
            setTimeout(() => {
                poemIndex = (poemIndex + 1) % poems.length;
                typePoem();
            }, 5000); // Tiempo de espera antes del siguiente poema
        }
    }
    nextChar();
}
typePoem();

// 3. Revelación al Scroll
function handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);

// 4. Lógica de Servicios (Overlays)
const serviceData = {
    bootcamp: {
        title: "EXAM BOOTCAMPS",
        content: "Nuestro programa de entrenamiento intensivo se segmenta según el perfil técnico del candidato:<br><br><ul><li><strong>Programa de 24 horas:</strong> Diseñado para perfiles con un dominio avanzado del idioma que requieren estrategias tácticas...</li><br><li><strong>Programa de 40 horas:</strong> Estructurado para candidatos que precisan un reforzamiento integral...</li></ul>"
    },
    mcer: {
        title: "PROGRESO CONTINUO MCER",
        content: "Instrucción formal orientada al desarrollo evolutivo de las competencias lingüísticas bajo los estándares del Marco Común Europeo de Referencia...<br><ul><li>12 horas mensuales</li><li>20 horas mensuales</li><li>32 horas mensuales</li></ul>"
    },
    esp: {
        title: "ESP PROFESSIONAL",
        content: "English for Specific Purposes. Áreas de especialización:<br><ul><li>Medicina y Ciencias de la Salud</li><li>Jurisprudencia y Derecho Internacional</li><li>Finanzas Corporativas</li></ul>"
    }
};

function openFullService(type) {
    const overlay = document.getElementById(`${type}-overlay`);
    const body = document.getElementById(`${type}-body`);
    if(overlay && body) {
        const data = serviceData[type];
        body.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
        overlay.style.display = 'block';
        setTimeout(() => { overlay.classList.add('active-overlay'); }, 50);
        document.body.style.overflow = 'hidden';
    }
}

function closeFullService() {
    const overlays = document.querySelectorAll('.service-overlay');
    overlays.forEach(o => { o.classList.remove('active-overlay'); setTimeout(() => { o.style.display = 'none'; }, 400); });
    document.body.style.overflow = '';
}

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}*...`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}