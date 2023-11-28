/* eslint-disable react/prop-types */

const Subscriber = ({ subscriber, index }) => {
    const { newsEmail } = subscriber
    
    console.log(newsEmail);
    return (
        <div>
            <div className="max-w-sm w-full mx-auto">
                <table className="">
                    <tbody>
                        <tr className="flex gap-10 my-2">
                            <th>{index+1}.</th>
                            <td>{newsEmail}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscriber;