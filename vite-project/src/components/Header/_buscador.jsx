import "./_buscador.css";
function _buscador() {
  return (
    <div className="search-bar">
      <button className="location-btn">📍</button>
      <input type="text" placeholder="Search Restaurant" />
      <button className="search-btn">🔍</button>
    </div>
  );
}

export default _buscador;
