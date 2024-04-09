function isFibonacciNumber(z: number): boolean {
  let x: number = 0;
  let y: number = 1;
  let seq: number = 0;

  while (seq < z) {
    seq = x + y;
    x = y;
    y = seq;
  }

  return seq === z;
}

function toCalculateFibonacci(f: number): void {
  let x: number = 0;
  let y: number = 1;
  let seq: number = 0; // Iniciar com 0

  if (f === 1) {
    seq = 1; // Caso especial: o primeiro número na sequência de Fibonacci é 1
  } else if (f > 1) {
    for (let i = 2; i <= f; i++) {
      seq = x + y;
      x = y;
      y = seq;
    }
  }
  console.log(seq);
}

toCalculateFibonacci(20);
