// 4. Navegación con Cortina de Libro
function navigate(id) {
    const curtain = document.getElementById('transition-curtain');
    curtain.style.left = "-100%";
    curtain.classList.add('active');
    
    setTimeout(() => {
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(s => s.classList.remove('active'));
        
        const target = document.getElementById(id);
        if(target) {
            target.classList.add('active');
            window.scrollTo(0, 0);
        }
        
        setTimeout(() => {
            curtain.classList.remove('active');
            curtain.style.left = "-100%";
        }, 600);
    }, 400);
}

// 2. Poemas: Escritura Mecánica Continua
const poems = [
    { text: "I started Early – Took my Dog –\nAnd visited the Sea –\nThe Mermaids in the Basement\nCame out to look at me –", author: "Dickinson" },
    { text: "I am the master of my fate,\nI am the captain of my soul.", author: "Henley" },
    { text: "The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep.", author: "Frost" }
];

let poemIndex = 0;
function typePoem() {
    const el = document.getElementById('poetry-text');
    if(!el) return;
    
    let fullText = `${poems[poemIndex].text}\n\n— ${poems[poemIndex].author}`;
    let charIndex = 0;
    el.textContent = "";

    function nextChar() {
        if (charIndex < fullText.length) {
            el.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(nextChar, 50);
        } else {
            setTimeout(() => {
                poemIndex = (poemIndex + 1) % poems.length;
                typePoem();
            }, 4000);
        }
    }
    nextChar();
}
typePoem();

// 3.3 y 3.4 Lógica de Ventanas Emergentes
const serviceData = {
    bootcamp: {
        title: "EXAM BOOTCAMPS",
        content: "Nuestro programa de entrenamiento intensivo se segmenta según el perfil técnico del candidato:<br><br><ul><li><strong>Programa de 24 horas:</strong> Diseñado para perfiles con un dominio avanzado.</li><br><li><strong>Programa de 40 horas:</strong> Estructurado para candidatos que precisan reforzamiento integral.</li></ul>"
    },
    mcer: {
        title: "PROGRESO CONTINUO MCER",
        content: "Instrucción formal orientada al desarrollo evolutivo de las competencias lingüísticas bajo los estándares del MCER.<br><br>Planes:<br><ul><li>12 horas mensuales (Estándar)</li><li>20 horas mensuales (Intensivo)</li><li>32 horas mensuales (Inmersión)</li></ul>"
    },
    esp: {
        title: "ESP PROFESSIONAL",
        content: "English for Specific Purposes. Especialización terminológica de alto nivel:<br><ul><li>Medicina y Ciencias de la Salud</li><li>Jurisprudencia y Derecho Internacional</li><li>Finanzas Corporativas</li></ul>"
    }
};

function openFullService(type) {
    const overlay = document.getElementById('service-overlay-container');
    const body = document.getElementById('overlay-body');
    const data = serviceData[type];
    
    body.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeFullService() {
    const overlay = document.getElementById('service-overlay-container');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}*.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}