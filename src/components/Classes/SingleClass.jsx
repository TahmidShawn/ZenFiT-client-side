
const SingleClass = ({ singleClass }) => {
    console.log(singleClass);
    const { title, description, instructor, schedule } = singleClass
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;