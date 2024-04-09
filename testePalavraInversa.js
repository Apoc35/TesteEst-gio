inverso = (p) => {
  let palavra = p;
  let contrario = [];
  for (let i = palavra.length - 1; i >= 0; i--) {
    contrario.push(palavra[i]);
  }
  console.log(contrario.join(""));
}

inverso("estágio");