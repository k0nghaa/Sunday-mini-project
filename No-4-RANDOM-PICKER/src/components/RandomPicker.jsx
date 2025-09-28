const RandomPicker = () => {
  return (
    <div className="flex flex-col itmes-center justify-center h-full">
      <h2 className="text-lg font-semibold mb-4">랜덤 추천</h2>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
        돌리기
      </button>
      <p className="mt-4 text-gray-600">결과가 여기에 표시됨</p>
    </div>
  );
};

export default RandomPicker;
