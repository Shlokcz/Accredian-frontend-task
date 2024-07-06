import './App.css';
import Topheader from './components/TopheaderContact/topheader';
import Navbar from './components/Navbar/navbar';
import Bottomheader from './components/BottomHeader/bottomheader';
import Learncontent from './components/LetsLearnContent/learncontent';
import Refer from "./components/HowdoIRefer/refer";
import Benefits from './components/ReferralBenefits/benefits';
import Questions from './components/FrequentlyAskedQuestions/questions';
import Touch from './components/GetInTouch/touch';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Bottomheader />
      <Learncontent />
      <Refer />
      <Benefits />
      <Questions />
      <Touch />
      <Footer />
    </div>
  );
}

export default App;
