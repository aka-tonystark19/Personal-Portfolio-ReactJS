import React from "react"
import image from "../lightBlue-bg.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Minimalistic Background" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8 ">
                <h1 className="text-3xl bold text-gray-800 font-bold leading-none lg:leading-snug home-name ">HELLO. THIS IS ADITYA. </h1>
                {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_c1dtgznx.json" mode="bounce" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> */}
            </section>
        </main>
    )
}
