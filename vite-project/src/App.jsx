import Encabezado from "./Encabezado";
import Article from "./components/article/Article";
import Futer from "./Futer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Encabezado />
      <Article />
      <Futer />
    </div>
  );
}

export default App;
