const ResultList = ({ results, searchKeyword }) => {
  const isSearching = searchKeyword.trim() !== '';

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">검색 결과</h2>

      {!isSearching && (
        <div>
          <p className="text-gray-500 mb-8 border-b border-gray-200">
            검색어를 입력하면 결과가 여기에 표시됩니다.
          </p>
          <p className="text-lg font-semibold mb-2">전체 리스트</p>
        </div>
      )}
      <div>
        {(isSearching ? results : results).map((item) => (
          <div className="mb-2 border-b border-gray-400" key={item.id}>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        {isSearching && results.length === 0 && <p>검색 결과가 없습니다.</p>}
      </div>
    </div>
  );
};

export default ResultList;
