import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"



export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16">
            <div className="container px-4 mx-auto">


                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="relative"  data-aos="fade-up-right"
                                  data-aos-delay="300">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />

                        </div>



                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">

                            <Image
                                src={about2Img}
                                alt="Foto do cachorro 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>



                    <div className="space-y-6 mt-10" data-aos="fade-up-left"
                                  data-aos-delay="300">
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>Until noe has loved an animal, a part of one's soul remais unawakened.
                            We believe in it we believe in easy acess to things that are good for our mind,
                            body and spirit. With a clever offering, superb and a secure checkout you're in good hands.</p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2010
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com os melhores especialistas.
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                O cuidado e conforto do seu amiguinho é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a target='_blank'
                                href={'https://wa.me/556899998899?text=Olá vim pelo site e gostaria de mais informações'}
                                className="bg-[#E84c3d] text-white flex items-center justify-center w-fit gap-2
                                    px-4 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a href="#"
                                className=" flex items-center justify-center w-fit gap-2
                                px-4 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}