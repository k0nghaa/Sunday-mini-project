import { useState } from 'react';

const RandomPicker = ({ results }) => {
  const [selected, setSelected] = useState(null);

  const pickRandom = () => {
    if (results.length === 0) return;
    const randomIndex = Math.floor(Math.random() * results.length);
    setSelected(results[randomIndex]);
  };

  return (
    <div className="flex flex-col itmes-center justify-center h-full">
      <h2 className="text-lg font-semibold mb-4">랜덤 추천</h2>
      <button
        onClick={pickRandom}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 mb-4"
      >
        돌리기
      </button>
      {selected ? (
        <div className="mb-3 p-2 border rounded bg-gray-50">
          <h3 className="font-semibold">{selected.title}</h3>
          <p className="text-gray-600">{selected.genre}</p>
          <p className="text-gray-700">{selected.description}</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">랜덤으로 추천 받아보세요!</p>
      )}
    </div>
  );
};

export default RandomPicker;
