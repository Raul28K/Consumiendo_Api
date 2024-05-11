document.addEventListener("DOMContentLoaded", function() {
    const consultarClimaBtn = document.getElementById("consultarClima");

    consultarClimaBtn.addEventListener("click", function() {
        const latitud = '-41.4698';
        const longitud = '-72.9443';
        const apiKey = '32df86d45f8997c6273c2aad664c4882';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${apiKey}&cnt=5`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Obtener la información del clima y construir el contenido del modal
            let modalContent = '';
            data.list.forEach(item => {
                const fecha = item.dt_txt;
                const temperatura = item.main.temp;
                const descripcion = `${item.weather[0].main}: ${item.weather[0].description}`;
                modalContent += `<p>Fecha y Hora: ${fecha}</p><p>Temperatura: ${temperatura} °C</p><p>Descripción: ${descripcion}</p><hr>`;
            });

            // Actualizar el contenido del modal
            const modalBody = document.getElementById("climaModalBody");
            modalBody.innerHTML = modalContent;

            // Mostrar el modal
            const climaModal = new bootstrap.Modal(document.getElementById('climaModal'));
            climaModal.show();
        })
        .catch(error => {
            console.error('Error al obtener el pronóstico del tiempo:', error);
        });
    });
});