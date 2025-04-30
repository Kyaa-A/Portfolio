import { Home } from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
