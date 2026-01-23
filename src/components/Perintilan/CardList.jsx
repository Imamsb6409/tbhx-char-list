import { useState } from "react";
import dataJSON from "../../data/data.json";
import CardItem from "./CardItem";

function CardList() {
  const [cards] = useState(dataJSON);
  const [filterCards, setFilterCards] = useState(dataJSON);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const search = cards.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilterCards(search);
  };

  const handleClear = () => {
    setSearchText("");
    setFilterCards(cards);
  };

  return (
    <>
      <div className="relative w-full max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="cari karakter..."
          className="search-input px-4 py-2 border border-gray-300 rounded-md w-full pr-10"
          value={searchText}
          onChange={handleSearch}
        />
        {searchText && (
          <button
            onClick={handleClear}
            className="absolute bg-black w-[30px] h-[30px] flex rounded-full justify-center items-center right-2 top-1/2 -translate-y-1/2 text-white"
          >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          </button>
        )}
      </div>

      <div className="list-card flex justify-center gap-12 flex-wrap">
        {filterCards.length === 0 ? (
          <div>Karakter tidak ditemukan</div>
        ) : (
          filterCards.map((item) => <CardItem key={item.id} card={item} />)
        )}
      </div>
    </>
  );
}

export default CardList;