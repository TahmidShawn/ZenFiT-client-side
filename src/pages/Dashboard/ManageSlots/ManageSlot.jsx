import DynamicSlots from '../../TrainerDetails/DynamicSlots';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import Book from './Book';

const ManageSlot = ({ manageSlot }) => {
    const [booked, setBooked] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/plans')
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [])

    const { trainerName, dailyTime, imageUrl, trainerEmail } = manageSlot

    const { user } = useContext(AuthContext)
    if (user?.email === trainerEmail) {
        return (
            <div className='text-center'>
                <p className='text-4xl'>Trainer Name: {trainerName}</p>

                <DynamicSlots numberOfSlots={dailyTime} />
                <div>
                    <h1 className='text-4xl text-center'>Booked Info</h1>
                    {
                        booked?.map((book, idx) => <Book key={idx} book={book}></Book>)
                    }
                </div>

            </div>
        );
    }

};

export default ManageSlot;