let prevWidth1 = window.innerWidth; // Guardamos el ancho inicial de la ventana
let accumulatedPosition = 0; // Acumulación de la posición

window.addEventListener('resize', function() {
  const currentWidth1 = window.innerWidth; // Obtenemos el ancho actual de la ventana
  const diff1 = prevWidth1 - currentWidth1; // Calculamos la diferencia en píxeles entre el ancho previo y el actual
  
  const idioma1 = document.querySelector('.container nav a'); // Obtenemos el contenedor .idioma
  
  // Asegúrate de que el movimiento sea solo hasta el borde izquierdo
  const maxLeftPosition = 0; // Esta es la posición más a la izquierda que puede ir
  const maxRightPosition = window.innerWidth - idioma1.offsetWidth; // Esta es la posición más a la derecha

  if (currentWidth1 < 1220) {
    // Si la ventana se ha hecho más pequeña (diff1 > 0), movemos el div
    if (diff1 > 0) {
      // Acumulamos el desplazamiento con cada reducción de tamaño de la ventana
      accumulatedPosition += diff1;

      // Aseguramos que el contenedor no se mueva más allá de los límites
      accumulatedPosition = Math.max(accumulatedPosition, maxLeftPosition);
      accumulatedPosition = Math.min(accumulatedPosition, maxRightPosition);

      // Aplicamos el desplazamiento acumulado usando transform
      idioma1.style.transform = translateX(-${accumulatedPosition}px); // Mueve hacia la izquierda
    }

    // Si la ventana se hace más grande (diff1 < 0), movemos el div hacia atrás
    if (diff1 < 0) {
      // Restamos la diferencia para mover el contenedor hacia la derecha
      accumulatedPosition += diff1;

      // Aseguramos que el contenedor no se mueva más allá de los límites
      accumulatedPosition = Math.max(accumulatedPosition, maxLeftPosition);
      accumulatedPosition = Math.min(accumulatedPosition, maxRightPosition);

      // Aplicamos el desplazamiento actualizado
      idioma1.style.transform = translateX(-${accumulatedPosition}px); // Mueve hacia la izquierda
    }
  }

  // Actualizamos el ancho anterior para el siguiente cálculo
  prevWidth1 = currentWidth1;
});
