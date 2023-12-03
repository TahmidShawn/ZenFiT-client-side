/* eslint-disable react/prop-types */


const SingleForum = ({ singleForum }) => {
    const { name, email, description } = singleForum
    return (
        <div>
            <div className="card bg-base-100 border-2 ">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleForum;

   