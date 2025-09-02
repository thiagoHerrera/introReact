import "./Article.css";
function Article() {
  return (
    <section className="offers">
      <h3>OFFERS</h3>
      <div className="offer-card">
        <img
          src="https://picsum.photos/200/100"
          alt="Restaurant"
          className="offer-img"
        />
        <div className="offer-info">
          <h4>Grán Mahakam</h4>
          <p>Asian, Chinese • 9:00-11:00</p>
          <p>⭐ 4.8 (72 reviews)</p>
        </div>
        <div className="offer-rating">4.8</div>
      </div>
    </section>
  );
}

export default Article;
