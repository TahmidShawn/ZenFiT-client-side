import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";


const Home = () => {
    return (
        <div>
            <div className="bg-base-200">
                <Banner></Banner>
                <Featured></Featured>
                <About></About>
            </div>


        </div>
    );
};

export default Home;