import React from 'react';
import DynamicSlots from '../../TrainerDetails/DynamicSlots';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const ManageSlot = ({ manageSlot }) => {
    const { trainerName, dailyTime, imageUrl, trainerEmail } = manageSlot
    const { user } = useContext(AuthContext)
    if (user.email === trainerEmail) {
        return (
            <div>
                <DynamicSlots numberOfSlots={dailyTime} />
            </div>
        );
    }

};

export default ManageSlot;