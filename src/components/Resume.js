import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
// import BG2 from "../BG2.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function Resume(){
    const [resume, setResume]=useState(null);
    useEffect(()=>{
        sanityClient.fetch(`*[_type=="resume"]{
            name,
            bio,
            "resumeImage": image.asset->url
        }`).then((data)=> setResume(data[0]))
        .catch(console.error);
    },[]);

    if(!resume) return <div> Loading...</div>

    return(
        <main className="bg-blue-100 min-h-screen p-12">
        {/* <main className="relative"> */}
            {/* <img src={BG2} alt="Bg" className="absolute w-full"/> */}
            <div className="p-10 lg:p-48 container mx-auto relative">
                <section className="bg-gray-800 rounded-lg shadow-1xl lg:flex p-20">
                    <img src={urlFor(resume.authorImage).url( )} alt={resume.name}  
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-yellow-600 mb-4">
                            Hey there. I am {" "}
                            <span className="text-green-100">{resume.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={resume.bio}  
                            projectId="ly2ztb1u"
                            dataset= "production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}