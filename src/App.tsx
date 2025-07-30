import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Counter from "./Components/Counter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
