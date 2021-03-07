let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  console.log(limitsBall, limitsStage);
  console.log(e.keyCode);
  console.log(e.key);

  switch (e.keyCode) {
    case 37:
      
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault(); // lo realiza solo en al tecla seleccionada
        x--};
      break;
    case 38:
      
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault(); // lo realiza solo en al tecla seleccionada
        y--};
      break;
    case 39:
      
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault(); // lo realiza solo en al tecla seleccionada
        x++};
      break;
    case 40:
      
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault(); // lo realiza solo en al tecla seleccionada
        y++};
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(`ctrl: ${e.ctrlKey}`);
  // console.log(`alt: ${e.altKey}`);
  // console.log(`shift: ${e.shiftKey}`);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmaciòn con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
