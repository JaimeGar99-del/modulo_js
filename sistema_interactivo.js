// =============================================
// SISTEMA INTERACTIVO - Validación de usuario
// =============================================

// Entrada de datos del usuario con prompt()
const userName = prompt("Ingresa tu nombre:", "");
let userAge = prompt("Ingresa tu edad:", "");

// Validación - primero verificar que no esté vacío
if (userName.length === 0 || userAge.length === 0) {
  // Mensaje de error por campo vacío
  const mensajeVacio = "Error: Por favor ingresa un valor válido en todos los campos.";
  console.error(mensajeVacio);
  alert(mensajeVacio);

// Luego verificar que la edad sea un número válido
} else if (isNaN(userAge)) {
  // Mensaje de error por edad no numérica
  const mensajeEdadInvalida = "Error: Por favor, ingresa una edad válida en números.";
  console.error(mensajeEdadInvalida);
  alert(mensajeEdadInvalida);

// Condicionales y mensajes dinámicos según la edad
} else if (Number(userAge) < 18) {
  // Usuario menor de edad
  const mensajeMenor = `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
  console.log(mensajeMenor);
  alert(mensajeMenor);

} else {
  // Usuario mayor de edad
  const mensajeMayor = `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
  console.log(mensajeMayor);
  alert(mensajeMayor);
}