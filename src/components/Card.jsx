import "./Card.scss";

function Card(props) {
  return (
    <>
      <h1 className="id">#{props.id}</h1>
      <p className="card">"{props.advice}"</p>
    </>
  );
}

export default Card;
