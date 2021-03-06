import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <About></About>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
}

export default App;