# 💼 PROYECTO: WebInnovate - Gestión de Eventos

## 📖 Descripción del Proyecto
Este proyecto consiste en la refactorización de una aplicación web para la gestión de eventos y reservas en espacios de coworking ("WebInnovate").
El objetivo principal ha sido mejorar la estructura del código legado, optimizando el rendimiento, la mantenibilidad y la experiencia de usuario mediante la aplicación de **Programación Orientada a Objetos (POO)**, características modernas de **ES6+** y manejo eficiente de **Asincronía**.

## ⚙️ Requerimientos Técnicos
Este proyecto cumple con los siguientes estándares y desafíos técnicos:
- ✅ **POO en JavaScript**: Implementación de clases `Usuario` y `Administrador` con herencia.
- ✅ **ES6+ Moderno**: Uso de `arrow functions`, `const`/`let`, `template literals` y desestructuración.
- ✅ **Manipulación del DOM**: Renderizado dinámico de listas y manejo de `event delegation`.
- ✅ **Asincronía**: Consumo de datos simulados con `async`/`await` y manejo de estados de carga (`loader`).
- ✅ **Validación de Formularios**: Feedback visual al usuario al realizar una reserva.

## 📂 Documentación Técnica

### 1. Stack Tecnológico
- **HTML5**: Estructura semántica.
- **CSS3**: Variables CSS (Custom Properties), Flexbox/Grid, animaciones y diseño responsivo.
- **JavaScript (ES6+)**: Lógica de negocio, consumo de datos y manipulación del DOM sin frameworks externos (Vanilla JS).

### 2. Estructura de Carpetas
El proyecto mantiene una estructura simple pero modular:

```
/
├── index.html      # Estructura principal de la aplicación
├── style.css       # Estilos, variables y animaciones
├── main.js         # Lógica de negocio (Clases, Async, DOM)
└── README.md       # Documentación del proyecto
```

### 3. Justificación de Decisiones Técnicas

#### Programación Orientada a Objetos (POO)
**Decisión**: Se implementó una clase base `Usuario` y una subclase `Administrador`.
**Justificación**: 
- **Encapsulamiento y Reutilización**: Permite definir comportamientos comunes (como `mostrarInfo`) una sola vez y reutilizarlos.
- **Escalabilidad**: Si en el futuro se requieren nuevos roles (ej: `Editor`), basta con extender la clase base.
- **Organización**: Mantiene separada la lógica de las entidades del resto de la lógica de la UI.

#### JavaScript Moderno (ES6+)
**Decisión**: Uso extensivo de `const`, arrow functions (`=>`) y métodos de array (`map`).
**Justificación**:
- **Legibilidad**: El código es más conciso y expresivo. `const` evita reasignaciones accidentales.
- **Eficiencia**: `map` permite transformar arrays de datos en elementos DOM de forma funcional y limpia, reemplazando bucles `for` imperativos.
- **Interpolación**: Los *template literals* facilitan la inyección de variables en cadenas HTML sin concatenaciones complejas.

#### Asincronía y Promesas
**Decisión**: Uso de `async`/`await` para la función `obtenerEventos`.
**Justificación**:
- **Bloqueo de UI**: Las operaciones de red (simuladas con `setTimeout`) no congelan la interfaz.
- **Claridad**: `async`/`await` permite leer el código asíncrono de manera secuencial, evitando el "callback hell" o cadenas de `.then()` difíciles de mantener.
- **UX**: Se implementó un `loader` visual para indicar al usuario que una operación está en curso, mejorando la percepción de rendimiento.

## 🚀 Cómo ejecutar este proyecto
Para visualizar este proyecto no necesitas instalar dependencias de Node.js, ya que usa Vanilla JS.

1. **Clonar o descargar** este repositorio.
2. Hacer doble clic en el archivo `index.html` para abrirlo en tu navegador favorito.
3. Alternativamente, puedes usar la extensión "Live Server" en VS Code para recarga automática.

### Flujo de Uso
1. Al abrir, verás la pantalla inicial.
2. Haz clic en **"Cargar Eventos Disponibles"**. Verás un *spinner* de carga por 2 segundos.
3. Se mostrarán los eventos simulados.
4. Completa el formulario y selecciona uno de los eventos cargados.
5. Haz clic en **"Confirmar Reserva"** para ver la simulación de envío.

###🌐 Despliegue (Demo)

**Repositorio GitHub:** 🔗 https://github.com/jltamayocabello-droid/m5_l4_analisis-de-caso_coworking.git

**Deploy del proyecto:** 🔗 https://jltamayocabello-droid.github.io/m5_l4_analisis-de-caso_coworking/

## ✒️ Autor

**Jorge Tamayo**

*Estudiante de Desarrollo Front-End Trainee - SENCE*
