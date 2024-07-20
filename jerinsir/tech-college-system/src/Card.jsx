import profilepic from "./assets/pexels-tyler-clemmensen-3877370-6239334.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card_image" alt="some image" src={profilepic}></img>
      <h2 className="card_title">Piragenth</h2>
      <p className="card_text">i'm technical college student for now </p>
    </div>
  );
}

export default Card;
