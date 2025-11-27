import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
