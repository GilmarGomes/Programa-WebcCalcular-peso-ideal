const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", () => {
  const nomeElement = document.querySelector("#inNome").value;
  const alturaElement = Number(document.querySelector("#inAltura").value);
  const inMasculino = document.querySelector("#inMasculino");
  const inFeminino = document.querySelector("#inFeminino");
  const resultElement = document.querySelector("#result");
  let peso = 0;

  if (
    nomeElement === "" ||
    alturaElement === 0 ||
    (inMasculino.checked === false && inFeminino.checked === false)
  ) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  if (inMasculino.checked === true) {
    peso = 22 * Math.pow(alturaElement, 2);
    resultElement.textContent = `${nomeElement}, seu peso ideal é: ${peso.toFixed()} kg`;
  } else if (inFeminino.checked === true) {
    peso = 21 * Math.pow(alturaElement, 2);
    resultElement.textContent = `${nomeElement}, seu peso ideal é: ${peso.toFixed(
      0
    )} kg`;
  }
});
