import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import Features from "./sections/Feature/Features";
import AboutUs from "./sections/AboutUs/AboutUs";
import Blackpage from "./sections/Blackpage"
import Product from "./sections/Product/Product"
import Contact from './sections/Contact/Contact'
function App() {
  return (
    <>
       <div className="herosections ">
        <Nav />
        <Hero />
       </div>
      <AboutUs/>
      <Features />
      <Blackpage/>
      <Product/>
      <Partners />
      <Reviews />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
