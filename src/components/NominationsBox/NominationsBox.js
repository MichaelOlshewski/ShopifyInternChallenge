import React from 'react';

const NominationsBox = () => {
    return (
        <div className='card'>
            <h3>Nominations</h3>
            <ul className='nominationList'>
                <li key='1'>
                    Rambo (1999)
                    <button className='btn btn-outline-primary'>Remove</button>
                </li>
            </ul>
        </div>
    );
};

export default NominationsBox;
