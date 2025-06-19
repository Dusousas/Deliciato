import React from 'react';
import AboutVariants from './subc/AboutVariants';
import AboutWhy from './subc/AboutWhy';

export default function About() {
    return (
        <>
            <section className='bg-[#FDF7F8] relative py-20'>
                <img className='absolute top-0  left-0 w-full lg:top-[-80px]' src="/wave-main.png" alt="" />
                <div className='maxW flex flex-col h-full gap-20 items-center lg:flex-row'>

                    <article className='mt-[180px] lg:w-1/2'>
                        <img src="/fabrica-img.png" alt="" />
                    </article>

                    <article className='mt-[180px] lg:w-1/2'>
                        <h1 className='font-semibold text-5xl uppercase mt-2'>Levando o <span className='text-RedP'>sorvete</span> a um novo patamar</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae a nobis exercitationem blanditiis aut officia veritatis eum, necessitatibus possimus rerum vero expedita consequuntur. Facilis laudantium laboriosam maiores ex adipisci. Excepturi voluptates corrupti aliquid porro vel nisi mollitia dolorem ipsam.</p>
                        <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptatum repellat corporis similique voluptatem voluptatibus quo minima doloremque, temporibus nobis?</p>
                        <div className='flex mt-4'>
                            <a className='bg-RedP px-8 py-3 text-white uppercase font-Kanit lg:justify-start tracking-wider rounded-xl' href="">Conheça a fábrica</a>
                        </div>
                    </article>
                </div>
                    <AboutVariants />
                    <AboutWhy />

            </section>
        </>
    );
}