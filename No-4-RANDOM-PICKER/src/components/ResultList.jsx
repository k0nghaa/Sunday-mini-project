const ResultList = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ResultList;
