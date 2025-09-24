import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './Components/Preloader';
import ScrollTopBtn from './Components/ScrollTopBtn';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import TeamPage from './pages/TeamPage';
import FaqPage from './pages/FaqPage';
import PricingPage from './pages/PricingPage';
import ServiceDetails from './pages/ServiceDetails';
import HomeThree from './pages/HomeThree';
import HomeFour from './pages/HomeFour';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import MoveToAustralia from './pages/CementPlantPage';
import CementCompletePlant from './pages/CementCompletePlant';
import CementGrindingUnit from './pages/CementGrindingUnit';
import FeaturesOne from './Components/Features/FeaturesOne';
import ReadyPlants from './pages/ReadyPlants';
import Rotary from './pages/Rotary';
import HorizontalGrinding, { HorizontalGrindingMills } from './pages/HorizontalGrindingMills';
import CementSpares from './pages/CementSpares';
import Crushers from './pages/Crushers';
import BlogThree from './Components/Blog/BlogThree';
import BlogFour from './Components/Blog/BlogFour';
import BlogOne from './Components/Blog/BlogOne';
import BlogTwo from './Components/Blog/BlogTwo';
import Blog7 from "./pages/Blog7";
import BlogPage from "./pages/BlogPage";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeThree />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/productsDetails/:id" element={<ServiceDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/cementCompletePlant" element={<CementCompletePlant />} />
        <Route path="/cementGrindingUnit" element={<CementGrindingUnit />} />
        <Route path="/rotary" element={<Rotary />} />
        <Route path="/horizontal-grinding-mills" element={<HorizontalGrinding />} />
         <Route path="/cement-spares" element={<CementSpares />} />
         <Route path="/crushers" element={<Crushers />} />
        <Route path="/ready-plants" element={<ReadyPlants />} />
        <Route path="/Blog" element={<NewsDetails />} />
        <Route path="/blog7" element={<Blog7 />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </>
    )
  }
}

export default App;
