import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./routes/LogIn";
import Register from "./routes/Register";
import Reset from "./routes/Reset";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}
