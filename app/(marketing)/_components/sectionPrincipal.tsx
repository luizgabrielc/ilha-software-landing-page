"use client"

import Image from "next/image"

export const PrincipalSection = () => {
    return (
        <div className="h-full flex gap-x-8 justify-around max-w-none mx-auto items-center bg-gradient-to-b from-orange-200 to-transparent rounded-2xl">
            <div className="w-[500px]">
                <h1 className="text-4xl text-start font-bold text-gray-800 font-sans">Nós Criamos A Solução Para <span className="text-3xl font-extrabold text-gray-950">O Seu Negócio</span></h1>
                <h1 className="mt-6 text-start text-lg font-semibold text-gray-800">Parceria de Sucesso: Desenvolvendo Estratégias e Soluções Altamente Personalizadas para Impulsionar o Crescimento e a Eficiência do Seu Negócio</h1>
            </div>
            <Image src="/creative-home-2.jpg" alt="creative-home" width="500" height="500" className="object-cover h-96 w-auto rounded-xl" />
        </div>
    )
} 