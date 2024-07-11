import React from 'react';
import Tickets from '../../components/tickets.tsx';



const TicketsPage: React.FC = () => {
    return (
        <div className='py-20 justify-center align-center md:m-auto md:mx-60 text-primary'>
            <h1 className='text-4xl text-center'>Tickets</h1>
            <div className='w-2/5 md:w-2/3 m-auto'>
            <Tickets />
            </div>
            
        </div>
    );
};

export default TicketsPage;