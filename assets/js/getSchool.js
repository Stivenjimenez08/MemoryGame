document.addEventListener('DOMContentLoaded', function() {
  // Obtener los datos de la API de escuelas usando Axios
  axios.get('https://backendmemorygame-production.up.railway.app/api/school/getAllSchools')
      
    .then(response => {
      // Manejar la respuesta y obtener los nombres de las escuelas
      const schools = response.data.schools; // Acceder a la propiedad 'schools'

      // Seleccionar el elemento select
      const selectElement = document.getElementById('schools');

      // Iterar sobre los datos de las escuelas y agregar opciones al select
      schools.forEach(school => {
        const option = document.createElement('option');
        option.value = school.id; // Asignar el valor de la opción
        option.textContent = school.name; // Asignar el texto de la opción (nombre de la escuela)
        selectElement.appendChild(option); // Agregar la opción al select
        
      });
    })
    .catch(error => {
      // Manejar errores
      console.error('Error al obtener las escuelas:', error);
    });
});