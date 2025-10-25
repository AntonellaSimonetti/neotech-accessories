import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="app-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer titulo="Categoría" />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
