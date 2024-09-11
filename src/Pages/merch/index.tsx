import React from 'react';

const MerchPage: React.FC = () => {
    return (
        <div className='py-20'>
            <section className="flex flex-col md:flex-row items-center justify-top lg:h-screen md:mx-20 lg:mx-40 lg:mt-20 flex-auto ">
                <hr className='h-px my-8 bg-gray-200 border-0' />
                <p className="text-primary px-10 md:p-5 lg:p-20 text-center max-w-screen-md w-full overflow-auto">Merch!</p>

            </section>

        </div>
    );
};

export default MerchPage;