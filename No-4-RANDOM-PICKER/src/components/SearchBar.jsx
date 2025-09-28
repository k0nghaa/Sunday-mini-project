const SearchBar = ({ setSearchKeyword }) => {
  return (
    <div>
      <header className="p-4 shadow bg-white">
        <div className="flex max-w-xl mx-auto">
          <input
            type="text"
            placeholder="키워드를 입력하세요 (예: 가족, 여행, 판타지)"
            className="flex-1 border rounded-l px-4 py-2 focus:outline-none"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
            검색
          </button>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
