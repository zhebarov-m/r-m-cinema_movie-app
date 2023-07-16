import "./App.css";
import "././scss/films.scss";
import "././scss/fonts.scss";
import "././scss/header.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
