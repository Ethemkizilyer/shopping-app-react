import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./Context/ThemeProvider";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Desc from "./Pages/Desc";
import Credit from "./Pages/Credit";
import PrivateRouter from "./router/PrivateRouter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import Bakar from "./Bakar";






function App() {

  const [theme] = useThemeHook();


  return (
    <main id="ert"  className={theme ? "bg-black" : "bg-light-2 "}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id/:name" element={<Desc />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/credit" element={<PrivateRouter />}>
          <Route path="" element={<Credit />} />
        </Route>

        {/* <Route path="/bakar" element={<Bakar />} /> */}
      </Routes>

      <Footer />
    </main>
  );
}

export default App
