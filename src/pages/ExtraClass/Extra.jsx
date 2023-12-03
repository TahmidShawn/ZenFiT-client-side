/* eslint-disable react/prop-types */


const Extra = ({ extra }) => {
    const { className, classDescription, instructor } = extra
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Class Name: {className}</h2>
                    <p>{classDescription}</p>
                    <p>Instructor: {instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default Extra;