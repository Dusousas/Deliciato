"use client"

import React from 'react';

export default function Main() {
    return (
        <>
            <section id='home' className='py-30'>
                <div className='maxW flex flex-col justify-between gap-20 items-center h-full lg:flex-row'>
                    <article className='lg:w-[60%]'>
                        <h2 className='uppercase text-sm font-medium tracking-wider'>Bem-vindo à Deliciato</h2>
                        <h1 className='font-semibold text-7xl uppercase mt-2'>O <span className='text-RedP'>melhor</span> sorvete da região.</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quod molestiae dicta repudiandae accusantium quasi fugit iure repellendus facere reiciendis?</p>
                        <div className='flex mt-4'>
                            <a className='bg-RedP px-8 py-3 text-white uppercase font-Kanit lg:justify-start tracking-wider rounded-xl' href="">Fale conosco</a>
                        </div>
                    </article>

                    <article className='lg:w-[40%]'>
                        <img src="/img-main.png" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}