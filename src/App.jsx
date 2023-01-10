import "./App.css";
import CardsPropation from "./components/cards/cards";
import Hero from "./components/introduction/hero";
import TopHedaer from "./components/top-header/topHedaer";
import Header from "./layouts/header/header";

function App() {
  return (
    <div className="App">
      <TopHedaer />
      <Header />
      <Hero />
      <CardsPropation />
    </div>
  );
}

export default App;
