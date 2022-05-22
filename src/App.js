import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Header from "./Pages/Shared/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App mx-8">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
