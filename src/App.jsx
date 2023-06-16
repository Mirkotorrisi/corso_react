import "./App.css";
import { PokemonsGrid } from "./components/PokemonsGrid/PokemonsGrid";

// REACT E' UNA LIBRERIA javascript
// differenza tra libreria e framework

// framework ti dà un ambiente in cui lavorare
// la libreria non è altro che un insieme di file già scritti da altri che vai ad importarti e a utilizzare

// REACT FUNZIONA A COMPONENTI. OGNI COMPONENTE COSTRUISCE LA MIA INTERFACCIA
// I COMPONENTI SERVONO PER ESSERE RIUTILIZZATI

// LA STRUTTURA DI UN PROGETTO REACT E' AD ALBERO ROVESCIATO, CIOè

// Dal componente principale (in questo caso App.js) si diramano i vari sotto-componenti,
// che a loro volta si possono diramare in altri sotto-componenti

function App() {
  console.log("IL MIO COMPONENTE STA GIRANDO DI NUOVO");
  // CHILD
  return (
    <div className="App">
      <PokemonsGrid />
    </div>
  );
}

export default App;
