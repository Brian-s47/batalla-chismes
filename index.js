const chalk = require("chalk");
const CompaneraCuriosa = require("./classes/CompaneraCuriosa");
const EstudianteEspia = require("./classes/EstudianteEspia");
const TiaVecina = require("./classes/TiaVecina");


// Genracion de numeros aleatorios
  function getNumAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

  // Crecion de array de "Chismosas" con numeros aleatorios
  const chismosas = [
  new TiaVecina("Doña Adelaida", getNumAleatorio(), getNumAleatorio()),
  new CompaneraCuriosa("Natalia", getNumAleatorio(), getNumAleatorio()),
  new EstudianteEspia("Juanito", getNumAleatorio(),getNumAleatorio()),
  ];

// Simular "X" rondas -> Ejemplo con 2
for (let ronda = 1; ronda <= 5; ronda++) {

  console.log(chalk.blue(`\n🔁 RONDA ${ronda}\n`));
  chismosas.forEach(c => {
    c.recolectarInfo();
    c.contarChisme();
    console.log(`📊 Nivel actual: ${chalk.magenta(c.getNivelChisme().toFixed(1))}`);
    console.log(`✨ Reputación actual: ${chalk.hex("#FFA500")(c.getReputacion().toFixed(1))}\n`);
  });
}

// Resultados
console.log(chalk.green("\n📊 ESTADÍSTICAS FINALES:\n"));
chismosas.forEach(c => {
  const nivel = c.getNivelChisme();
  const reputacion = c.getReputacion();
  const nombre = c.nombre;

  let nivelStr = nivel >= 8 ? chalk.magenta(`${nivel.toFixed(1)} 🔥`) : nivel.toFixed(1);
  let reputacionStr = reputacion >= 7
    ? chalk.hex("#FFA500")(reputacion.toFixed(1))
    : reputacion <= 3
      ? chalk.black(reputacion.toFixed(1))
      : reputacion.toFixed(1);

  console.log(`👑 ${nombre} → Chisme: ${nivelStr}, Reputación: ${reputacionStr}`);
});

// Calcular ganador
const ganadora = chismosas.reduce((max, chismosa) =>
  chismosa.getNivelChisme() > max.getNivelChisme() ? chismosa : max
);

console.log(
    chalk.bold.greenBright(`\n🏆 ¡La reina del chisme es ${ganadora.nombre} con nivel ${ganadora.getNivelChisme().toFixed(1)}!`)
);
