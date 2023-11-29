
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AppliedTrainerData = ({ trainer, refetch }) => {
    const { trainerName, trainerEmail, trainerAge, imageUrl, _id, role, dailyTime, experience } = trainer;
    const axiosPublic = useAxiosPublic()

    const handleMakeTrainer = (_id) => {

        axiosPublic.patch(`trainer/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    alert('done')
                }
            })

    };


    if (role === 'member') {
        return (
            <div>
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
                    <td>Role:{role}</td>
                    <th>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
                            <span className="text-4xl">👁</span>
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{trainerName}</h3>
                                <p className="py-4">{trainerEmail}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-error">Reject</button>
                                        <button className="btn btn-success" onClick={() => { handleMakeTrainer(_id) }}>Accept</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </th>
                </tr>
            </div>
        );
    }

};

export default AppliedTrainerData;
