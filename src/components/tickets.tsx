import React from 'react';

interface Ticket {
    id: number;
    link: string;
    location: string;
    venue: string;
    date: string;
}

const Tickets: React.FC = () => {
    const tickets: Ticket[] = [
        { id: 1, link:'https://www.universe.com/events/vrengt-med-venner-villskudd-tba-tickets-HZNTSG', location: 'Moss', venue: 'HOF', date: '03.08.2024' },
        { id: 2, link:'https://tikkio.com/tickets/48062-vrengt-lokal-klubb', location: 'Trondheim', venue: 'Lokal', date: '05.09.2024' },
        { id: 3, link:'https://bastard.antitickets.com/event/vrengt', location: 'Tromsø', venue: 'Bastard Bar', date: '19.09.2024' },
        { id: 4, link:'https://revolveroslo.ticketco.events/no/nb/e/vrengt__revolver?fbclid=IwZXh0bgNhZW0CMTAAAR1_7o2xGB-e2sH0pSdc18hLrntinGWcbf1v7ZuKewQrQvz4TTtPzYbMq18_aem_ZmFrZWR1bW15MTZieXRlcw', location: 'Oslo', venue: 'Revolver', date: '11.10.2024' },
        { id: 5, link:'https://www.universe.com/events/vrengt-med-venner-villskudd-tba-tickets-HZNTSG', location: 'Fredrikstad', venue: 'St. Cloix', date: '12.10.2024' },
        { id: 6, link:'', location: 'Kristiansand', venue: 'Vaktbua', date: '13.10.2024'},
        {id: 7, link:'', location: 'Stavanger', venue: 'Folken', date: '18.10.2024'}
        
    ];

    return (
        <div>
            {tickets.map((ticket) => (
                <div className='grid grid-cols-3 md:text-xl mt-14' key={ticket.id}>
                    
                    <p className='text-'>{ticket.location}</p>
                    <p className='italic text-center'>{ticket.venue}</p>
                    <p className='text-right'>{ticket.date}</p>
                    
                    {ticket.link ? (
                        <a href={ticket.link} className='bg-[#ebbb75] text-xl py-2 text-center col-span-3'>
                            Buy tickets
                        </a>
                    ) : (
                        <div className='bg-gray-300 text-xl py-2 text-center col-span-3'>
                            Comming soon
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default Tickets;