import Featuredwork from "./components/Featuredwork";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Recentpost from "./components/Recentpost";


export default function Home() {
  return (
    <div id="home">
    <Header />
    <Herosection />
    <Recentpost />
    <Featuredwork />
    <Footer />
    </div>
   
  );
}