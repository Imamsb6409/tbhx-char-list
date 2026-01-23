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
        className="search"
        onChange={handleSearch}
      />
      <div className="list-card">
        <div className="list-card">
          {filterCards.length === 0 ? (
            <div>data tidak ditemukan</div>
          ) : (
            filterCards.map((item) => (
              <CardItem key={item.id} card={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default CardList;
