function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => {
        if(s.classList.contains('active')) {
            s.style.opacity = "0";
            setTimeout(() => { s.style.display = 'none'; s.classList.remove('active'); }, 500);
        }
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
    el.classList.remove('active-poem');
    el.classList.add('exit-poem');
    setTimeout(() => {
        const p = poems[currentPoem];
        el.textContent = `${p.text}\n\n— ${p.author}`;
        el.classList.remove('exit-poem');
        setTimeout(() => { el.classList.add('active-poem'); currentPoem = (currentPoem + 1) % poems.length; }, 50);
    }, 800);
}
setInterval(rotatePoetry, 9000);
rotatePoetry();

const serviceData = {
    bootcamp: {
        title: "EXAM BOOTCAMPS",
        content: "Nuestro programa de entrenamiento intensivo se segmenta según el perfil técnico del candidato:<br><br><ul><li><strong>Programa de 24 horas:</strong> Diseñado para perfiles con un dominio avanzado del idioma que requieren estrategias tácticas, gestión de tiempos y familiarización con el rigor de formatos internacionales (Cambridge C1/C2, TOEFL iBT, IELTS).</li><br><li><strong>Programa de 40 horas:</strong> Estructurado para candidatos que, adicionalmente a la estrategia, precisan un reforzamiento integral de la arquitectura lingüística para asegurar el puntaje objetivo.</li></ul><br>Abarcamos certificaciones Cambridge (B2 First a C2 Proficiency), TOEFL, IELTS y EXAVER, con un enfoque estricto en la precisión académica."
    },
    mcer: {
        title: "PROGRESO CONTINUO MCER",
        content: "Instrucción formal orientada al desarrollo evolutivo de las competencias lingüísticas bajo los estándares del Marco Común Europeo de Referencia.<br><br>Ofrecemos planes de alta intensidad adaptados a objetivos institucionales:<br><ul><li>12 horas mensuales (Progresión estándar)</li><li>20 horas mensuales (Progresión intensiva)</li><li>32 horas mensuales (Inmersión técnica)</li></ul><br>Este esquema permite consolidar una base de autoridad antes de someterse a procesos de certificación internacional."
    },
    esp: {
        title: "ESP PROFESSIONAL",
        content: "English for Specific Purposes. La especialización terminológica es el pilar de la competitividad en mercados globales.<br><br>Áreas de especialización:<br><ul><li>Medicina y Ciencias de la Salud</li><li>Jurisprudencia y Derecho Internacional</li><li>Finanzas Corporativas y Mercados</li><li>Ingeniería de Precisión</li></ul><br>Disponemos de esquemas de 12, 20 o 32 horas mensuales. Se realizan protocolos de cotización técnica para consorcios empresariales o colectivos académicos de posgrado."
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
    overlays.forEach(o => { o.classList.remove('active-overlay'); setTimeout(() => { o.style.display = 'none'; }, 500); });
    document.body.style.overflow = '';
}

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}* el dd/mm/aa a las ________am/pm.\nGracias,\nNombre y apellido de preferencia.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}