/* eslint-disable react/prop-types */
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AppliedTrainerData = ({ trainer, refetch }) => {
    const { trainerName, trainerEmail, trainerAge, imageUrl, _id, role } = trainer;
    const axiosPublic = useAxiosPublic();

    if (role === 'member') {
        const handleMakeTrainer = (_id) => {
            axiosPublic.patch(`trainer/${_id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        alert('done');
                    }
                });
        };

        return (
            <tr className="grid grid-cols-2 md:grid-cols-5 items-center justify-center">
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{trainerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>Email: {trainerEmail}</p>
                </td>
                <td>Age: {trainerAge}</td>
                <td>Role: {role}</td>
                <td>

                    <button className="btn" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}>
                        <span className="text-4xl">👁</span>
                    </button>
                    <dialog id={`my_modal_${_id}`} className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{trainerName}</h3>
                            <p className="py-4">{trainerEmail}</p>
                            <div className="modal-action">
                                <form method="dialog">

                                    <button className="btn btn-error">Reject</button>
                                    <button className="btn btn-success" onClick={() => { handleMakeTrainer(_id) }}>Accept</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </td>
            </tr>
        );
    }
    else {
        return null;
    }
};

export default AppliedTrainerData;
