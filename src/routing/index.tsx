import Home from "pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing