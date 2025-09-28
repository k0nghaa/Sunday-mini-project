import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import RandomPicker from './components/RandomPicker';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <SearchBar />
      <main className="flex flex-1">
        <div className="flex-1 p-4 overflow-y-auto">
          <ResultList />
        </div>
        <aside className="w-1/3 p-4 bg-gray-100 border-l">
          <RandomPicker />
        </aside>
      </main>
    </div>
  );
}

export default App;
