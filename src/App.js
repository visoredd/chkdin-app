import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Cart from "./components/Cart/Cart";
const Header = React.lazy(() => import("./components/Header/Header"));
const Create = React.lazy(() => import("./components/AddProduct/Create"));
const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div className="mx-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create/:id" element={<Create />} />
        </Routes>
        <Cart />
      </Suspense>
    </div>
  );
}

export default App;
