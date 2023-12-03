
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Classes from "../../components/Classes/Classes";
import Featured from "../../components/Featured/Featured";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/shared/Footer/Footer";
import { Helmet } from "react-helmet";



const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ZenFiT</title>
            </Helmet>
            <div className="bg-base-200">
                <Banner></Banner>
                <Featured></Featured>
                <About></About>
                <Classes></Classes>
                <Testimonials></Testimonials>
                <Blog></Blog>
                <TeamSection></TeamSection>
                <NewsLetter></NewsLetter>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;