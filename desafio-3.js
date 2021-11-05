let usuarioRegistrado = "Diego";
let passwordRegistrado = 1234;
let error = 0;

for (let i = 0; i < 10; i = i + 1) {
  let usuario = prompt("Ingresa tu usuario");
  let password = prompt("Ingresa tu password");

  if (usuario == usuarioRegistrado && passwordRegistrado == password) {
    console.log("Bienvenido al sistema Diego");
    break;
  } else if (usuario == usuarioRegistrado && passwordRegistrado != password) {
    console.log("te euivocaste de password " + i);
    error = error + 1;
    if (error == 3) {
      console.log("Acceso denegado");
    }
  } else if (usuario != usuarioRegistrado && passwordRegistrado == password) {
    console.log("te equivocaste de usuario " + i);
    error = error + 1;
    if (error == 3) {
      console.log("Acceso denegado");
    }
  } else {
    console.log("error: " + i);
    error = error + 1;
    if (error == 3) {
      console.log("Acceso denegado");
      break;
    }
  }
}
