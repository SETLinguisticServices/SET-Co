document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const filial = document.getElementById('filial-interes').value;
    const modalidad = document.getElementById('modalidad').value;
    const horario = document.getElementById('horario').value;

    const mensaje = `Hola SET & Co., solicito informes para la filial: *${filial}*%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Modalidad:* ${modalidad}%0A` +
                    `*Horario preferente:* ${horario}`;

    window.open(`https://wa.me/522721076629?text=${mensaje}`, '_blank');
});