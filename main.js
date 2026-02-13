/**
 * Desafío: Análisis de Caso - Javascript Asíncrono
 * Autor: WebInnovate Dev Team
 */

// ==========================================
// 1. Clases y Orientación a Objetos (POO)
// ==========================================

class Usuario {
    constructor(nombre, email, tipoUsuario) {
        this.nombre = nombre;
        this.email = email;
        this.tipoUsuario = tipoUsuario; // 'admin' o 'cliente'
    }

    mostrarInfo() {
        return `Usuario: ${this.nombre} (${this.email})`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email) {
        super(nombre, email, 'admin');
    }

    gestionarEventos() {
        console.log(`[ADMIN] ${this.nombre} accediendo al panel de gestión de eventos.`);
    }
}

// ==========================================
// 2. Simulación de Base de Datos y API
// ==========================================

const BASE_DATOS_EVENTOS = [
    { id: 1, nombre: "Workshop de React Avanzado", fecha: "2024-10-15", cupos: 20 },
    { id: 2, nombre: "Seminario de UX/UI", fecha: "2024-10-20", cupos: 50 },
    { id: 3, nombre: "Hackathon WebInnovate", fecha: "2024-11-05", cupos: 100 },
    { id: 4, nombre: "Charla: Futuro de la IA", fecha: "2024-11-12", cupos: 30 }
];

// Instanciamos un administrador por defecto
const adminPrincipal = new Administrador("Carlos CTO", "carlos@webinnovate.com");
adminPrincipal.gestionarEventos();

// ==========================================
// 3. Lógica Asíncrona (Async/Await)
// ==========================================

const mostrarLoader = (estado) => {
    const loader = document.getElementById('loader');
    if (estado) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
};

// Simulación de fetch a API externa
const mockFetchEventos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos éxito siempre para este caso, pero podríamos simular error con Math.random()
            resolve({
                ok: true,
                json: () => Promise.resolve(BASE_DATOS_EVENTOS)
            });
        }, 2000); // 2 segundos de latencia simulada
    });
};

const obtenerEventos = async () => {
    try {
        mostrarLoader(true);

        // Uso de fetch real (comentado para demo offline) o mock
        // const respuesta = await fetch('https://api.example.com/eventos');

        const respuesta = await mockFetchEventos();

        if (!respuesta.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const eventos = await respuesta.json();
        mostrarEventos(eventos);
        llenarSelectEventos(eventos);

    } catch (error) {
        console.error('Error al cargar eventos:', error);
        alert('Hubo un problema cargando los eventos. Por favor intenta de nuevo.');
    } finally {
        mostrarLoader(false);
    }
};

// ==========================================
// 4. Manipulación del DOM y ES6
// ==========================================

const mostrarEventos = (eventos) => {
    const listaEventos = document.getElementById('lista-eventos');

    // Uso de map y template literals para generar el HTML
    // Desestructuración de objetos en los argumentos ({nombre, fecha, cupos})
    const htmlEventos = eventos.map(({ nombre, fecha, cupos }) => `
        <li class="event-item">
            <div class="event-info">
                <h3>${nombre}</h3>
                <div class="event-date">
                    <span>📅 Fecha: ${fecha}</span>
                    <span>👥 Cupos: ${cupos}</span>
                </div>
            </div>
            <button class="btn btn-primary js-btn-detalle" data-nombre="${nombre}">Ver Detalle</button>
        </li>
    `).join('');

    listaEventos.innerHTML = htmlEventos;
};

// Event Delegation para botones dinámicos
document.getElementById('lista-eventos').addEventListener('click', (e) => {
    if (e.target.classList.contains('js-btn-detalle')) {
        const nombreEvento = e.target.getAttribute('data-nombre');
        alert(`Has seleccionado ver detalles de: ${nombreEvento}\n\nPor favor selecciónalo en el formulario de abajo para reservar.`);
    }
});

const llenarSelectEventos = (eventos) => {
    const select = document.getElementById('evento-select');
    // Mantenemos la opción por defecto
    select.innerHTML = '<option value="">-- Elige un evento --</option>';

    eventos.forEach(evento => {
        const option = document.createElement('option');
        option.value = evento.id;
        option.textContent = `${evento.nombre} (${evento.fecha})`;
        select.appendChild(option);
    });
};

// ==========================================
// 5. Manejo de Formularios y Eventos
// ==========================================

document.getElementById('cargar-eventos').addEventListener('click', obtenerEventos);

document.getElementById('form-reserva').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const eventoId = document.getElementById('evento-select').value;

    if (!eventoId) {
        alert('Por favor selecciona un evento válido.');
        return;
    }

    // Creamos una instancia de Cliente (Usuario estándar)
    const nuevoCliente = new Usuario(nombre, email, 'cliente');

    // Simular envío de reserva
    const mensajeDiv = document.getElementById('mensaje-reserva');
    mensajeDiv.classList.remove('hidden', 'success-message');

    // Simulación de proceso asíncrono de reserva
    mensajeDiv.innerHTML = "Procesando reserva...";

    setTimeout(() => {
        mensajeDiv.innerHTML = `
            <strong>¡Reserva Exitosa!</strong><br>
            Gracias ${nuevoCliente.mostrarInfo()}.<br>
            Te hemos enviado la confirmación a tu correo.
        `;
        mensajeDiv.classList.add('success-message');
        e.target.reset(); // Limpiar formulario
    }, 1500);
});
