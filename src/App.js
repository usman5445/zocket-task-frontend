import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import CampaignsPage from "./Pages/CampaignsPage";
import ProductsPage from "./Pages/ProductsPage";
import CustomersPage from "./Pages/CustomersPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#F6F9FF] relative font-Eudoxus-regular flex  h-screen w-screen">
        <Sidebar />
        <div className="relative w-full">
          <Navbar />

          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/campaigns/*" element={<CampaignsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
