import React from "react"
import image from "../homeBG.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Minimalistic Background" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8 ">
                <h1 className="text-6xl text-red-400 font-fold  leading-none lg:leading-snug home-name ">Hello. This is Aditya. </h1>
            </section>
        </main>
    )
}