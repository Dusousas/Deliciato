import React from 'react';

export default function AboutVariants() {
    return (
        <>
            <section className='pt-30'>
                <div className='maxW'>
                    <h1 className='text-center font-semibold text-5xl uppercase mt-2'>Variações de <span className='text-RedP'>Sorvetes</span></h1>

                    <article className='flex flex-wrap flex-col justify-center lg:flex-row mt-10 gap-8'>
                        <div className='bg-[#FDEFEF] py-6 px-8 w-[23%] rounded-xl shadow-xl'>
                            <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center'>
                                <img className='w-[60%]' src="/cone.png" alt="" />
                            </div>
                            <h1 className='tracking-wider font-semibold text-xl mt-4'>Ice Cone</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>

                        <div className='bg-[#FDEFEF] py-6 px-8 w-[23%] rounded-xl shadow-xl'>
                            <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center'>
                                <img className='w-[60%]' src="/cone.png" alt="" />
                            </div>
                            <h1 className='tracking-wider font-semibold text-xl mt-4'>Ice Cone</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>

                        <div className='bg-[#FDEFEF] py-6 px-8 w-[23%] rounded-xl shadow-xl'>
                            <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center'>
                                <img className='w-[60%]' src="/cone.png" alt="" />
                            </div>
                            <h1 className='tracking-wider font-semibold text-xl mt-4'>Ice Cone</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>

                        <div className='bg-[#FDEFEF] py-6 px-8 w-[23%] rounded-xl shadow-xl'>
                            <div className='bg-white h-20 w-20 rounded-full flex items-center justify-center'>
                                <img className='w-[60%]' src="/cone.png" alt="" />
                            </div>
                            <h1 className='tracking-wider font-semibold text-xl mt-4'>Ice Cone</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>

                    </article>
                </div>
            </section>
        </>
    );
}