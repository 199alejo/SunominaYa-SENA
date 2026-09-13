// ==========================================
// SISTEMA DE GESTIÓN: SU NÓMINA YA
// Control de navegación interactiva y menú responsive
// ==========================================

function cambiarPantalla(idDestino) {
    const login = document.getElementById('vista-login');
    const layout = document.getElementById('app-layout');
    const modulos = document.querySelectorAll('.modulo-vista');
    const sidebar = document.querySelector('.sidebar');

    // Cerrar el menú desplegable móvil si está abierto
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }

    // 1. Si la vista solicitada es volver al Login
    if (idDestino === 'vista-login') {
        if (login) login.classList.remove('hidden');
        if (layout) layout.classList.add('hidden');
        return;
    }

    // 2. Ocultar Login y desplegar Layout Principal
    if (login) login.classList.add('hidden');
    if (layout) layout.classList.remove('hidden');

    // 3. Ocultar todos los módulos internos
    modulos.forEach(mod => mod.classList.add('hidden'));
    
    // 4. Mostrar únicamente el módulo seleccionado (ej. vista-dashboard)
    const destino = document.getElementById(idDestino);
    if (destino) {
        destino.classList.remove('hidden');
    }
}

// TOGGLE NAVEGACIÓN MÓVIL
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}