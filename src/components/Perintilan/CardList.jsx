import { useState } from "react";
import dataJSON from "../../data/data.json";
import CardItem from "./CardItem";

function CardList() {
  const [cards] = useState(dataJSON);
  const [filterCards, setFilterCards] = useState(dataJSON);

  const handleSearch = (e) => {
    let search = cards.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilterCards(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="cari karakter..."
        className="search-input mb-8 px-4 py-2 border border-gray-300 rounded-md w-full max-w-md block mx-auto"
        onChange={handleSearch}
      />
      <div className="list-card flex justify-center gap-12 flex-wrap">
        {filterCards.length === 0 ? (
          <div>data tidak ditemukan</div>
        ) : (
          filterCards.map((item) => <CardItem key={item.id} card={item} />)
        )}
      </div>
    </>
  );
}

export default CardList;
