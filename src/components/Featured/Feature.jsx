/* eslint-disable react/prop-types */

const Feature = ({ feature }) => {
    const { title, description, img } = feature

    return (
        <div className="card border-gray-600 border-2 mx-10 md:mx-10 lg:mx-2">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Feature;


