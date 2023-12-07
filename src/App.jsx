import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./Cart/Cart";

function App() {

  return (
    <div>
      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

        </BrowserRouter>

        </CartProvider>
    </div>
  );
}

export default App;
