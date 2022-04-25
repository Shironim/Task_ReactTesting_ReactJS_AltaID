import './App.css';
import FormCoding from './screen/FormCoding';
import Search from './screen/Search';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormCoding />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div >
  );
}

export default App;
