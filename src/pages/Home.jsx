import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <AboutUs></AboutUs>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    );
};

export default Home;