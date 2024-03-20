import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider from './../../assets/slider/slider.jpg';
import slider1 from './../../assets/slider/slider1.jpg';
import slider2 from './../../assets/slider/slider2.jpg';

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
        <Carousel>
            {slides.map((slide, index) => (
                <div key={index} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                                <p className="mb-5">{slide.description}</p>
                                {/* Add your additional content here */}
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
