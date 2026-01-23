import { colours } from "../../data/colours";

function CardItem({ card }) {
  return (
    <div className="card-card" style={{ backgroundColor: card.color }}>
      <img src={require(`../../assets/${card.image}`)} alt={card.name} width={250} />
      <h1>{card.name}</h1>
      <div className="types-container">
      </div>
      <p className="description">{card.description}</p>
    </div>
  );
}
export default CardItem;
