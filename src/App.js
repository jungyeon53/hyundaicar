import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Swiper from './components/Swiper';
import SwiperCar from './components/SwiperCar';
import Footer from './components/Footer';
import Inner from './components/inner';
import Banner from './components/Banner';
import BannerCar from './components/BannerCar';
//import NewBanner from './components/NewBanner';

function App() {
  return (
    <div className="App">
  {/* header */}
    <NavBar />
    <Swiper />
    <SwiperCar />
    <Inner />
    <Banner />
    <BannerCar />
    {/* <NewBanner /> */}
    <Footer />
    </div>
  );
}

export default App;
