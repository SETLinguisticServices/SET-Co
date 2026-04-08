function showSection(id) {
    const sections = document.querySelectorAll('.page-section');
    
    // Salida difuminada (0.5s)
    sections.forEach(s => {
        if(s.classList.contains('active')) {
            s.style.opacity = "0";
            setTimeout(() => { s.style.display = 'none'; s.classList.remove('active'); }, 500);
        }
    });
    
    // Entrada difuminada (0.5s)
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
    el.style.opacity = 0;
    setTimeout(() => {
        const p = poems[currentPoem];
        el.textContent = `${p.text}\n\n— ${p.author}`;
        el.style.opacity = 1;
        currentPoem = (currentPoem + 1) % poems.length;
    }, 500);
}
setInterval(rotatePoetry, 8000);
rotatePoetry();

// Lógica de Modal de Servicios
const serviceData = {
    bootcamp: {
        title: "EXAM BOOTCAMPS",
        content: "Nuestro programa de entrenamiento intensivo se divide según el perfil del candidato:\n\n• **Programa de 24 horas:** Ideal para estudiantes con un dominio avanzado del idioma que requieren estrategias tácticas, manejo de tiempos y familiarización con el formato del examen (Cambridge C1/C2, TOEFL iBT, IELTS).\n\n• **Programa de 40 horas:** Diseñado para quienes, además de la estrategia, necesitan un reforzamiento integral de gramática y estructura para alcanzar el puntaje deseado.\n\nCubrimos certificaciones Cambridge (B2 First a C2 Proficiency), TOEFL, IELTS y EXAVER, enfocándonos en la precisión académica."
    },
    mcer: {
        title: "PROGRESO CONTINUO MCER",
        content: "Clases de instrucción formal diseñadas para el desarrollo evolutivo de las cuatro habilidades lingüísticas bajo el Marco Común Europeo de Referencia.\n\nOfrecemos flexibilidad total según la intensidad requerida:\n• 12 horas mensuales (Ritmo estándar)\n• 20 horas mensuales (Ritmo intensivo)\n• 32 horas mensuales (Inmersión total)\n\nEste programa permite construir una base sólida antes de enfrentar procesos de certificación técnica."
    },
    esp: {
        title: "ESP PROFESSIONAL",
        content: "English for Specific Purposes. El dominio del idioma en contextos técnicos es vital para la competitividad global.\n\nEspecialidades:\n• Medicina (Medical English)\n• Leyes (Legal English)\n• Finanzas y Negocios\n• Ingeniería y Tecnología\n\nContamos con planes de 12, 20 o 32 horas mensuales. Es posible realizar cotizaciones especiales para grupos corporativos o compañeros universitarios que busquen una formación de nicho compartida."
    }
};

function openServiceModal(type) {
    const modal = document.getElementById('service-modal');
    const body = document.getElementById('modal-body-content');
    const data = serviceData[type];
    
    body.innerHTML = `<h3>${data.title}</h3><p>${data.content.replace(/\n/g, '<br>')}</p>`;
    modal.style.display = "block";
}

function closeServiceModal() {
    document.getElementById('service-modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('service-modal');
    if (event.target == modal) { modal.style.display = "none"; }
}

function sendCustomWA(filial) {
    const tel = "522721076629";
    const msg = `Hola *SETT & CO. Linguistic Services*.\nMe gustaría solicitar una reunión de presentación para la filial *${filial}* el dd/mm/aa a las ________am/pm.\nGracias,\nNombre y apellido de preferencia.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, '_blank');
}