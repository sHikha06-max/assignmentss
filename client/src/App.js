
import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./Components/LoginPage";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
       
        
      </Routes>
    </div>
  );
}

export default App;