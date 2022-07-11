import { Routes, Route, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Login from "./routes/login/Login";
import Voli from "./routes/voli/voli.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="voli/*" element={<Voli />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
        <Route path = '*' element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;
