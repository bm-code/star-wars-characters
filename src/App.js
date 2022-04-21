import Header from "./components/Header";
import Pagination from "./components/Pagination";
import AllCharacters from "./components/AllCharacters";

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <AllCharacters />
        <Pagination />
      </section>
    </div>
  );
}

export default App;
