// Cliquez sur « Exécuter » pour voir le résultat dans la console
console.log("Initialisation de l'AtelierCode...");

function fibonacci(n) {
  const suite = [0, 1];
  for (let i = 2; i < n; i++) suite.push(suite[i - 1] + suite[i - 2]);
  return suite;
}

console.log("Fibonacci (10 termes) :", fibonacci(10));
console.info({ statut: "ok", termes: 10 });
console.warn("Ceci est un avertissement");
