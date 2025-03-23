"use clinet"

import UseEmblaCarouselType from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
import useEmblaCarousel from 'embla-carousel-react'

const services = [
    {
        Title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors/>,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },

    {
        Title: "Consulta Veterinária",
        description: "Oferecemos atendimento clínico básico ou especializado para cuidadr da saúde do animal.",
        duration: "1h",
        price: "$45",
        icon: <Scissors/>,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },

    
    {
        Title: "Taxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não tem tempo ou transporte adequeado para locomover os animais",
        duration: "2h",
        price: "$80",
        icon: <Scissors/>,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },

    {
        Title: "Hotel para Pet",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alhuns dias. Os pets ficam acomodados em espações seqguros confortáveis ",
        duration: "1h",
        price: "$60",
        icon: <Scissors/>,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    }



]


export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align:"start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)": {slidesToScroll: 3 } 
        }
    })


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                
                <div className="realtive">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)]'>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}