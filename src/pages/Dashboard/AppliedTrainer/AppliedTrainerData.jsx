
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
                <tr className="grid grid-cols-2 md:grid-cols-4 items-center justify-center">
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

                        <button onClick={() => { handleMakeTrainer(_id) }}>Make Trainer</button>
                    </th>
                </tr>
            </div>
        );
    }

};

export default AppliedTrainerData;
