import React from 'react';
import YouTube from 'react-youtube';

interface VideoProps {
    videoIds: string[];
}

const Video: React.FC<VideoProps> = ({ videoIds }) => {
    return (
        <div>
            {videoIds.map((videoId) => (
                <div key={videoId} className='justify-center px-52'>
                    <hr className='h-px my-8 bg-gray-200 border-0 ' />
                    <YouTube videoId={videoId} />
                    
                </div>
            ))}
        </div>
    );
};

export default Video;