
const Trainer = ({ trainer }) => {
    console.log(trainer);
    const { trainerName, trainerEmail, trainerAge, imageUrl, _id } = trainer
    return (
        <div>
            <tr className="grid grid-cols-2 md:grid-cols-4 items-center justify-center">
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imageUrl} alt="Avatar Tailwind CSS Component"/>
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
                <th>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                </th>
            </tr>
        </div>
    );
};

export default Trainer;