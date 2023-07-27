const opcion1Button = document.getElementById("opcion1");
const opcion2Button = document.getElementById("opcion2");

opcion1Button.addEventListener("click", () => {
    alert("Teeeeee amo");

    // Función para obtener una posición aleatoria en el ancho de la pantalla
    function getRandomPosition() {
        const screenWidth = window.innerWidth;
        return Math.floor(Math.random() * screenWidth);
    }

    // Función para crear y animar un gatito
    function createGatito() {
        const gatito = document.createElement("div");
        gatito.classList.add("gatitos", "gatito-image");
        gatito.style.left = `${getRandomPosition()}px`; // Establecer posición horizontal aleatoria
        document.body.appendChild(gatito);

        // Eliminar el gatito del DOM después de cierto tiempo para evitar acumulación
        setTimeout(() => {
            document.body.removeChild(gatito);
        }, 2000); // Ajusta el tiempo (en milisegundos) para controlar cuánto tiempo tardan en desaparecer los gatitos
    }

    // Crear y agregar gatitos en el cuerpo del documento continuamente
    const intervalId = setInterval(createGatito, 1000); // Ajusta el tiempo (en milisegundos) para controlar la frecuencia de aparición de los gatitos

    // Redimensionar gatitos cuando cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
        clearInterval(intervalId); // Limpiar el intervalo anterior
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild); // Limpiar los gatitos existentes
        }
        intervalId = setInterval(createGatito, 200); // Volver a crear gatitos con la nueva pantalla redimensionada
    });
});

opcion2Button.addEventListener("click", () => {
    alert("OK ajaja sigamos como estamos");
});
