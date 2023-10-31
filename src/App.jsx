import { BrowserRouter } from "react-router-dom";
import { About,Contact, Hero, Navbar, Works} from "./Components";
import FooterBottom from "./Components/footer/FooterBottom";
import Feedbacks from "./Components/Feedbacks";
import Slider from "./Components/Slider";
import Web3d from "./Components/web3d";


const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-black z-10 '>
        <div className='bg-fit'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Slider/>
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact />
        </div>
        <FooterBottom/>
      </div>
    </BrowserRouter>
  );
}

export default App;
