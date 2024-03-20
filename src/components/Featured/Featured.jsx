import useFeatured from "../../hooks/useFeatured";
import Feature from "./Feature";



const Featured = () => {
    const [featured] = useFeatured();
    console.log(featured);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl lg:px-10 mx-auto mt-32 pb-20">
            {
                featured.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
            }
        </div>
    );
};

export default Featured



