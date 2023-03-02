import "./App.css";
import { SedanCard } from "./SedanCard";
import { SuvsCard } from "./SuvsCard";
import { LuxuryCard } from "./LuxuryCard";

function App() {
  return (
    <main className="App">
      <div className="content-wrapper">
        <SedanCard />
        <SuvsCard />
        <LuxuryCard />
      </div>
      <div className="attribute-wrapper">
        <p>
          Challenge by Frontend Mentor. Coded by{" "}
          <strong>Karleen M S Richards</strong>.
        </p>
      </div>
    </main>
  );
}

export default App;
