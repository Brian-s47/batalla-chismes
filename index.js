const Chismosa = require("./classes/Chismosa")
const CompaneraCuriosa = require("./classes/CompaneraCuriosa");
const EstudianteEspia = require("./classes/EstudianteEspia");
const TiaVecina = require("./classes/TiaVecina");

const chismosas = [
  new TiaVecina("Doña Rosa", 7, 3),
  new CompaneraCuriosa("Laura", 6, 2),
  new EstudianteEspia("Camila", 8, 4),
];

// Simular 2 rondas
for (let ronda = 1; ronda <= 2; ronda++) {
  console.log(Chismosa.blue(`\n🔁 RONDA ${ronda}\n`));
  chismosas.forEach(c => {
    c.recolectarInfo();
    c.contarChisme();
  });
}

// Mostrar resultados finales
console.log(Chismosa.green("\n📊 ESTADÍSTICAS FINALES:\n"));
chismosas.forEach(c => {
  const nivel = c.getNivelChisme();
  const reputacion = c.getReputacion();
  const nombre = c.nombre;

  let nivelStr = nivel >= 8 ? Chismosa.magenta(`${nivel.toFixed(1)} 🔥`) : nivel.toFixed(1);
  let reputacionStr = reputacion >= 7
    ? Chismosa.hex("#FFA500")(reputacion.toFixed(1)) // naranja
    : reputacion <= 3
      ? Chismosa.black(reputacion.toFixed(1))
      : reputacion.toFixed(1);

  console.log(`👑 ${nombre} → Chisme: ${nivelStr}, Reputación: ${reputacionStr}`);
});

// Determinar ganadora
const ganadora = chismosas.reduce((max, chismosa) =>
  chismosa.getNivelChisme() > max.getNivelChisme() ? chismosa : max
);

console.log(
    Chismosa.bold.greenBright(`\n🏆 ¡La reina del chisme es ${ganadora.nombre} con nivel ${ganadora.getNivelChisme().toFixed(1)}!`)
);
