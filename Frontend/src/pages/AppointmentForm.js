import React, { useState } from 'react';

function AppointmentForm({ appointment, handleSubmit, handleCancel }) {
    const [donorID, setDonorID] = useState(appointment?.donorID ?? '');
    const [donationCenterID, setDonationCenterID] = useState(appointment?.donationCenterID ?? '');
    const [date, setDate] = useState(appointment?.date ?? '');
    const [statusA, setStatusA] = useState(appointment?.statusA ?? '0');
    const [userType, setUserType] = useState(localStorage.getItem('userType') || '');

    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit({
            id: appointment?.id,
            donorID,
            donationCenterID,
            date,
            statusA
        });
    };

    const cancelHandler = () => {
        handleCancel();
    };

    return (
        <form className="appointment-form" onSubmit={submitHandler}>
            {(userType==='Doctor' || userType==='Admin') && (
                <label>
                    Donor ID:
                </label>) && (
                <input type="text" value={donorID} onChange={(e) => setDonorID(e.target.value)} required />
            )}
            <label>
                Donation Center ID:
            </label>
            <input type="text" value={donationCenterID} onChange={(e) => setDonationCenterID(e.target.value)} required />

            <label>
                Date:
            </label>
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />

            {(userType==='Doctor' || userType==='Admin') && (
            <label>
                Status:
            </label>) && (
                <select value={statusA} onChange={(e) => setStatusA(e.target.value)}>
                    <option value="">Select status</option>
                    <option value='0'>Pending</option>
                    <option value='1'>Confirmed</option>
                </select>
            )}
            <p> </p>
            <p>
                <button className={"edit-button"} type="submit">Save</button>
                <button className={"delete-button"} type="button" onClick={cancelHandler} style={{ marginLeft: '10px' }}>Cancel</button>
            </p>
        </form>
    );
}

export default AppointmentForm;
