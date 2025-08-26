import _logo from "./components/header/_logo";
import _buscador from "./components/header/_buscador";
import _perfilUsuario from "./components/header/_perfilUsuario";
import "./components/header/Header.css";

function Encabezado() {
  return (
    <header className="encabezado">
      <div className="encabezado-top">
        <_perfilUsuario />
        <_logo />
      </div>

      <div className="greeting">
        <h2>Good afternoon, John</h2>
        <p>It's time for lunch</p>
      </div>

      <_buscador />

      <nav className="categorias">
        <div>🍜 Chinese</div>
        <div>🌮 Tacos</div>
        <div>🍔 Burger</div>
        <div>🍩 Donut</div>
      </nav>
    </header>
  );
}

export default Encabezado;
