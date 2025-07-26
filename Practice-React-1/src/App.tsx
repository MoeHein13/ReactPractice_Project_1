import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Counter from "./Components/Counter";
import ListPage from "./Pages/ListPage";
import TablePage from "./Pages/TablePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </div>
  );
}

export default App;
