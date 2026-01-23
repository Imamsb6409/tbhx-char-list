import { colours } from "../../data/colours";
const images = import.meta.glob("../../assets/*", { eager: true });

function CardItem({ card }) {
  const imagePath = `../../assets/${card.image}`;
  const image = images[imagePath]?.default;

  return (
    <div className="card-card border flex flex-col w-[350px] h-[600px] bg-white" style={{ backgroundColor: card.color }}>
      <img src={image} className="w-[350px] h-[350px] object-cover object-top rounded-t-xl" alt={card.name} width={250} />
      <h1>{card.name}</h1>
      <div className="types-container">
        {card.types.map((item, index) => (
          <span
            key={index}
            className="type-badge"
            style={{ backgroundColor: colours[item.toLowerCase()] }}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="description">{card.description}</p>
    </div>
  );
}
export default CardItem;
