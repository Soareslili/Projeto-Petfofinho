"use client";

import UseEmblaCarouselType from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.jpg'
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';


const testimonials = [
    {
        constent:
            "Desde que comecei a levar a luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Marina Souza",
        role: "Tutora da Luna (Golden Retriever)",
        imagem: tutor2,
    },

    {
        constent:
            "O serviço do hotel para pets fou uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para a casa seuper feliz! Sem dúvida, o melhor petshop da região. ",
        author: "Rafael",
        role: "Tutora da Thor (Bulldog Francês)",
        imagem: tutor1,
    },

    {
        constent:
            "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadora, e o serviço, e o de banho especializado para felinos foi maravilhosos! Agora sei onde confiar o cuidado deles. ",
        author: "Camila Fernandes",
        role: "Tutora da Mel e do Max",
        imagem: tutor2,
    }
]


export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,


    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-[#ffd449] py-16">

            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

                <div className="realtive max-w-4xl mx-auto">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex will-change-transform">
                            {testimonials.map((item, index) => (

                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.imagem}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-gray-200'>{item.constent}</p>

                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-2
                            -translate-y-1/2  z-10"
                        onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-2 
                             -translate-y-1/2 z-10"
                        onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>


                </div>
            </div>

        </section>
    )
}