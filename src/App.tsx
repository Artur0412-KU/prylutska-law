import './style/index.scss'
import Header from "./components/Header/Header.tsx";
import About from "./components/About/About.tsx";
import Services from "./components/Services/Services.tsx";
import Call from "./components/Call/Call.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import Footer from "./components/Footer/Footer.tsx";


function App() {

  return (
    <>
       <Header/>
        <About/>
        <Services/>
        <Reviews/>
        <Call/>
        <Footer/>
    </>
  )
}

export default App
