import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import RandomPicker from './components/RandomPicker';
import mockData from './mockData';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredResults = mockData.filter((item) => {
    const keyword = searchKeyword.toLowerCase();

    return (
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.genre.toLowerCase().includes(keyword) ||
      item.year.toString().includes(keyword)
    );
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <SearchBar setSearchKeyword={setSearchKeyword} />
      <main className="flex flex-1">
        <div className="flex-1 p-4 overflow-y-auto">
          <ResultList results={filteredResults} searchKeyword={searchKeyword} />
        </div>
        <aside className="w-1/3 p-4 bg-gray-100 border-l">
          <RandomPicker results={filteredResults} />
        </aside>
      </main>
    </div>
  );
}

export default App;
