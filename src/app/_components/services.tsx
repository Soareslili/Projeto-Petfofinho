"use client";

import UseEmblaCarouselType from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
import useEmblaCarousel from 'embla-carousel-react'

const services = [
    {
        Title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },

    {
        Title: "Consulta Veterinária",
        description: "Oferecemos atendimento clínico básico ou especializado para cuidadr da saúde do animal.",
        duration: "1h",
        price: "$45",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },


    {
        Title: "Taxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não tem tempo ou transporte adequeado para locomover os animais",
        duration: "2h",
        price: "$80",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },

    {
        Title: "Hotel para Pet",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alhuns dias. Os pets ficam acomodados em espações seqguros confortáveis ",
        duration: "1h",
        price: "$60",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    }



]


export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="realtive">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex will-change-transform">
                            {services.map((item, index) => (

                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">

                                            <div className='flex gap-3'>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.Title}</h3>
                                                    <p className='text-gray-400 text-sm select-nome'>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-5 h-5' />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a href="#"
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                            >
                                                Entrar em Contato
                                                <WhatsappLogo className='w-5 h-5' />
                                            </a>
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