import React from "react"
import image from "../lightBlue-bg.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Minimalistic Background" className="absolute object-cover sm:w-full sm: h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8 ">
                <h1 className="text-3xl bold text-gray-800 font-bold leading-none lg:leading-snug home-name animate-pulse  ">HELLO. THIS IS ADITYA. </h1>
            </section>
        </main>
    )
}
