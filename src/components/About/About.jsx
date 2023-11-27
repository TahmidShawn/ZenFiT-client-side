/* eslint-disable react/no-unescaped-entities */
import img1 from './../../assets/about/story.jpg'
import img2 from './../../assets/about/goal.jpg'
import img3 from './../../assets/about/vision.jpg'

const About = () => {
    return (
        <div className='max-w-6xl mx-auto lg:px-5'>
            <h1 className='text-6xl font-bold text-center mb-16'>About Us</h1>
            {/* Our Story */}
            <div className="hero mt-5">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src={img1} className="w-full md:w-5/12 h-80 shadow-2xl rounded-xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Our Story</h1>
                        <p className="py-6 text-justify">
                            <span className='text-xl font-semibold'>Z</span>enFiT is the embodiment of a shared vision for holistic wellness. Offering diverse fitness services, from sculpting strength to conquering running goals, dancing into fitness, embracing tranquility through yoga, and embarking on a mindful journey with meditation, ZenFiT transcends conventional fitness platforms. More than just a hub, ZenFiT is a supportive community, uniting like-minded individuals committed to personal well-being. Crafted to elevate your unique journey, ZenFiT invites you to redefine balance, fulfillment, and vitality. Join ZenFiT, where your wellness story unfolds with every beat, step, and breath.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Mission */}
            <div className="hero mt-5">
                <div className="hero-content items-center justify-center flex-col-reverse gap-10 lg:flex-row-reverse">
                    <div>
                        <h1 className="text-4xl font-bold">Our Mission</h1>
                        <p className="py-6 text-justify">
                            <span className='text-xl font-semibold'>A</span>t ZenFiT, our mission is to empower individuals on their wellness journey, redefining the way they perceive and achieve fitness. We are committed to providing a diverse range of personalized fitness programs, advanced tracking tools, and a nurturing community. Whether your goal is to build strength, enhance cardiovascular endurance, dance into fitness, discover tranquility through yoga, or cultivate mindfulness through meditation, we strive to be your unwavering companion.
                        </p>
                    </div>
                    <img src={img2} className="w-full md:w-5/12 h-80 shadow-2xl rounded-xl" />
                </div>
            </div>
            {/* Our philosophy */}
            <div className="hero mt-5">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src={img3} className="w-full md:w-5/12 h-80 shadow-2xl rounded-xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Our philosophy</h1>
                        <p className="py-6 text-justify">
                            <span className='text-xl font-semibold'>A</span>t ZenFiT, our philosophy revolves around the belief that wellness is a personal journey, unique to each individual. We embrace a holistic approach that transcends traditional fitness boundaries, recognizing that true well-being encompasses physical strength, mental resilience, and a sense of community. Our commitment is to offer diverse fitness services tailored to individual aspirations, fostering an inclusive and supportive environment. We believe that everyone, irrespective of their starting point, can achieve their wellness goals. ZenFiT is more than a fitness platform; it's a guiding philosophy that encourages individuals to embrace their unique path to a balanced and fulfilling life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;