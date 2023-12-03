import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import slider from './../../assets/slider/slider.jpg';
import slider1 from './../../assets/slider/slider1.jpg';
import slider2 from './../../assets/slider/slider2.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slides = [
    {
        image: slider1,
        title: 'Yoga Harmony',
        description: "Embark on a journey of self-discovery and holistic well-being with ZenFit's Yoga Harmony. Immerse yourself in the ancient practice of yoga, track your sessions, and find tranquility in each pose. Cultivate balance, flexibility, and inner peace.",
    },
    {
        image: slider2,
        title: 'Run Beyond Limits',
        description: "Experience the freedom of the open road with ZenFit's Running Revolution. Whether you're a seasoned marathoner or a casual jogger, our fitness tracker helps you map your runs, set pace goals, and conquer new distances. Lace up and explore the world with every stride",
    },
    {
        image: slider,
        title: 'Gym Mastery',
        description: "Unleash your full potential at the gym with ZenFit. Our advanced fitness tracker helps you track your workouts, set goals, and achieve new milestones. Elevate your strength, build muscle, and sculpt your body with precision.",
    },

];



const Banner = () => {
    return (
        <AutoplaySlider
            className='h-[600px]'
            play={true}
            cancelOnInteraction={false}
            interval={5000}
            infinite={true}
            buttons={false}
        >
            {slides.map((slide, index) =>
                <div
                    key={index}
                    className="hero min-h-full"
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl text-white">
                            <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                            <p className="mb-5 mt-7">{slide.description}</p>
                            <Link to='/classes'>
                                <button className="btn border-none bg-[#554640] hover:text-black text-white w-40">Join Now <FaCircleArrowRight className='mt-[2px] text-xl' /> </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </AutoplaySlider>
    );
};

export default Banner;
