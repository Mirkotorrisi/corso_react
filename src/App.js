import "./App.css";
import { useState } from "react";
import { usePokemon } from "./usePokemon";
import { Button } from "./components/Button/Button";
import { useForm } from "./hooks/useForm";
import { Input } from "./components/Input/Input";
import { FirstContainer } from "./components/FirstContainer/FirstContainer";
import { SecondContainer } from "./components/SecondContainer/SecondContainer";

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
  const { form, handleChange } = useForm();
  const [text, setText] = useState("");
  const onClick = () => {};
  console.log("QUESTO E' IL MIO TEXT:", text);

  const NUMER_DI_TELEFONO = 42058345028;

  console.log("IL MIO COMPONENTE STA GIRANDO DI NUOVO");
  // CHILD
  return (
    <div className="App">
      {/* <FirstContainer
        form={form}
        handleChange={handleChange}
        onClick={onClick}
      /> */}
      <SecondContainer>
        <div className="form">
          <input
            type="text"
            // value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={onClick}>Clicca per stampare</button>
          <h1>{text}</h1>
          <h1>{NUMER_DI_TELEFONO}</h1>
        </div>
      </SecondContainer>
    </div>
  );
}

export default App;
