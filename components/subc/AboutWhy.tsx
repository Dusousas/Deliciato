import React from 'react';

const motivos = [
    {
        titulo: 'Ingredientes Naturais',
        descricao: 'Nossos sorvetes são feitos com frutas frescas e ingredientes selecionados, garantindo sabor e qualidade.',
        imagem: '/cone.png',
    },
    {
        titulo: 'Produção Artesanal',
        descricao: 'Cada receita é feita com carinho e atenção aos detalhes, mantendo a tradição do verdadeiro sorvete artesanal.',
        imagem: '/cone.png',
    },
    {
        titulo: 'Sabor Incomparável',
        descricao: 'Oferecemos uma variedade de sabores que conquistam todos os paladares, do clássico ao exótico.',
        imagem: '/cone.png',
    },
];

export default function AboutWhy() {
    return (
        <section className='pt-30'>
            <div className='maxW flex flex-col items-center justify-center gap-20 lg:flex-row'>
                <article className='lg:w-1/2'>
                    <h1 className='font-semibold text-5xl uppercase mt-2'>
                        Por que <span className='text-RedP'>escolher</span> os sorvetes <span className='text-RedP'>Deliciato?</span>
                    </h1>
                    <p className='mt-4 mb-10'>
                        Conheça os motivos que fazem da Deliciato a escolha perfeita para os amantes de um bom sorvete.
                    </p>

                    {motivos.map((item, index) => (
                        <article className='mt-4'>
                            <div key={index} className='flex gap-8 items-center w-[80%]'>
                                <div className='bg-[#F6AEAF] h-20 w-32 rounded-full flex items-center justify-center'>
                                    <img className='w-[60%]' src={item.imagem} alt={item.titulo} />
                                </div>
                                <div>
                                    <h1 className='text-lg font-semibold'>{item.titulo}</h1>
                                    <p className='mt-2'>{item.descricao}</p>
                                </div>
                            </div>
                        </article>
                    ))}

                    <div className='flex mt-10'>
                        <a className='bg-RedP px-8 py-3 text-white uppercase font-Kanit tracking-wider rounded-xl' href=''>Entre em contato</a>
                    </div>
                </article>

                <article className='w-1/2'>
                    <img src="/abou-why.png" alt="" />
                </article>

            </div>
        </section>
    );
}
