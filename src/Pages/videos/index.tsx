import React from 'react';
import Video from '../../components/video.tsx';

const InfoPage: React.FC = () => {
    return (
        <div className='py-20 justify-center align-center mx-60 text-primary '>
            <h1 className='text-4xl text-center'>Videos</h1>
            
            <Video videoIds={['TER7K4JGyNw', 'C-2hmOOPoRY', 'qxofDs9FtxM', 'sKCZC3Hic7I', '7Ftn3F87a28' ]} />
        </div>
    );
};

export default InfoPage;