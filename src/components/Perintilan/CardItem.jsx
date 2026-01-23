import { colours } from "../../data/colours";
const images = import.meta.glob("../../assets/*", { eager: true });

function CardItem({ card }) {
  const imagePath = `../../assets/${card.image}`;
  const image = images[imagePath]?.default;

  return (
    <div
      className="hover:scale-105 hover:shadow-xl transition-all ease-in-out duration-300    B relative border rounded-xl flex flex-col w-[350px] h-[600px] bg-white"
      style={{ backgroundColor: card.color }}
    >
        <div className="w-[50px] h-[50px] rounded-tr-xl flex items-center justify-center absolute right-0 bg-black text-white top-0">
            <span className="font-bold text-2xl">{card.peringkat}</span>
        </div>
      <img
        src={image}
        className="w-[350px] h-[350px] object-cover object-top rounded-t-xl"
        alt={card.name}
        width={250}
      />
      <div className="mx-2 mt-2">
        <h1 className="text-2xl font-semibold font-bungee">{card.name}</h1>
        <div className="types-container mt-2 mb-4">
          {card.types.map((item, index) => (
            <span
              key={index}
              className="type-badge px-3 py-1 rounded-full text-white mr-2 bg-red-500"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="font-mono">{card.description}</p>
      </div>
    </div>
  );
}
export default CardItem;
