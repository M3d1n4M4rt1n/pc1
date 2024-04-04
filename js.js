let personas = [
    { nombre: 'Alonso Guerrero', oficio: 'Ingeniero Agrícola' },
    { nombre: 'Sandra Figueroa', oficio: 'Ingeniera de Alimentos' },
    { nombre: 'Jorge Navarro', oficio: 'Ingeniero de Petróleos' },
    { nombre: 'Lucía Méndez', oficio: 'Ingeniera de Materiales' },
    { nombre: 'César Vargas', oficio: 'Ingeniero en Robótica' },
    { nombre: 'Bianca Espinoza', oficio: 'Ingeniera Geológica' },
    { nombre: 'Rodrigo Núñez', oficio: 'Ingeniero Naval' },
    { nombre: 'Gabriela Castillo', oficio: 'Ingeniera de Control y Automatización' },
    { nombre: 'Andrés Gálvez', oficio: 'Ingeniero Acústico' },
    { nombre: 'Verónica Paredes', oficio: 'Ingeniera de Seguridad Industrial' },
    { nombre: 'Marco Antonio Ramírez', oficio: 'Ingeniero Metalúrgico' },
    { nombre: 'Jimena Ortiz', oficio: 'Ingeniera en Biotecnología' }
];


document.addEventListener('DOMContentLoaded', function() {
    cargarPersonas();
});

function cargarPersonas() {
    const contenedor = document.getElementById('listaOficios');
    contenedor.innerHTML = ''; 

    personas.forEach((persona, index) => {
        const elemento = document.createElement('div');
        elemento.classList.add('persona');
        elemento.innerHTML = `
            <span>${persona.nombre} - ${persona.oficio}</span>
            <button class="btn" onclick="contratar(${index})">Contratar</button>
        `;
        contenedor.appendChild(elemento);
    });
}

function contratar(index) {
    const contenedorContratados = document.getElementById('listaContratados');
    const persona = personas.splice(index, 1)[0];

    // Crear y mostrar la notificación
    mostrarNotificacion(`Contratado/a: ${persona.nombre}`);

    const elemento = document.createElement('div');
    elemento.classList.add('persona');
    elemento.innerHTML = `<span>${persona.nombre} - ${persona.oficio}</span>`;
    contenedorContratados.appendChild(elemento);

    cargarPersonas();
}

function mostrarNotificacion(mensaje) {
    const contenedor = document.getElementById('notificationContainer');
    const notificacion = document.createElement('div');
    notificacion.classList.add('notification');
    notificacion.textContent = mensaje;

    contenedor.appendChild(notificacion);

    setTimeout(() => notificacion.classList.add('show'), 10); 
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => contenedor.removeChild(notificacion), 500);
    }, 3000);
}
