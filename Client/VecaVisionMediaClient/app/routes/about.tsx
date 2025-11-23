export default function About() {
    return(
        <main className="text-center relative leading-loose">
            <div className="about-section-container border-vvm-teal">
                <h2 className="about-section-heading text-vvm-lightblue">Our Purpose</h2>
                <p className="about-section-tagline">Bringing Your Vision to Life, Frame by Frame.</p>
                <p className="about-p">Driven by the belief that authentic storytelling and high-quality visuals have the power to transform businesses and captivate audiences, Veca Vision Media exists to put that power into the hands of businesses by providing exceptional video marketing and advertising services.</p>
                <div className="flex flex-col 
                    w-fit max-w-[1260px] 
                    mx-6 sm:mx-16 lg:mx-auto p-4 
                    rounded-lg
                    bg-custom-gray"
                >
                    <p className="text-left italic opacity-70">Using video to connect with a prospect is so much more than a cold call. It humanized the selling process</p>
                    <p className="text-left italic opacity-70">- Jill Rowley</p>
                </div>
            </div>


            <div className="about-section-container border-vvm-lightblue">
                <h2 className="about-section-heading text-vvm-lightblue">Our Mission</h2>
                <p className="about-section-tagline">Inspire, Engage, and Impress, One Frame at a Time.</p>
                <p className="about-p">At Veca Vision Media, our mission is to empower businesses and brands to connect with their audiences through innovative and captivating visual storytelling. We are committed to delivering high-quality video production services that exceed our clients' expectations, driven by creativity, professionalism, and a relentless pursuit of excellence.</p>
            </div>


            <div className="about-section-container border-vvm-blue">
                <h2 className="about-section-heading text-vvm-lightblue">Our Origin</h2>
                <p className="about-section-tagline">Discovery, Enthusiasm, and Passion.</p>
                <p className="about-p">
                    After finding my grandma's disposable camera on the kitchen sink, I looked down the viewfinder and was immediately fascinated at the fact that I could record absolutely anything and play it back. That day, I realized I could capture life in a whole new way; I was hooked. Around the summer of 2023, I came to the conclusion that I wanted to share the art of videography with others in an impactful and meaningful way that could return a high rate of value. I started this videography business with the hope that the same passion I found in videography at the age of 8 would spark excitement in others as well. Veca Vision Media was created to show that passion through each and every frame, leaving you and your audience in awe.
                </p>
            </div>


            <div className="about-section-container border-vvm-pink">
                <h2 className="about-section-heading text-vvm-lightblue mb-10">Our Team</h2>
                <img src="/images/VVM-Jaiden_head.jpg" alt="Jaiden Veca" width="300" height="200" className="rounded-full mx-auto" />
                <p className="px-6 mt-3">Jaiden Veca - Founder / Videographer</p>
            </div>

            <div className="about-section-container">
                <h2 className="about-section-heading text-vvm-lightblue mb-10">Backed by the Gallatin Valley</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0 w-full max-w-[800px] mx-auto place-items-center">
                    <img src="/logos/Daves_Sushi.svg" width="128" height="128" className="grayscale hover:grayscale-0 transition duration-200 ease-linear"/>
                    <img src="/logos/jam.svg" width="128" height="128" className="grayscale hover:grayscale-0 transition duration-200 ease-linear" />
                    <img src="/logos/revelry.webp" width="128" height="128" className="grayscale hover:grayscale-0 transition duration-200 ease-linear" />
                    <img src="/logos/Tarantinos-logo-small.webp" width="175" height="175" className="grayscale hover:grayscale-0 transition duration-200 ease-linear" />
                    <img src="/logos/WilliesDistillery.svg" width="128" height="128" className="grayscale hover:grayscale-0 transition duration-200 ease-linear"/>
                    <img src="/logos/montana_fence_green.webp" width="200" height="200" className="grayscale hover:grayscale-0 transition duration-200 ease-linear"/>
                    <img src="/logos/mountain_italian_ice_color.webp" width="128" height="128" className="grayscale hover:grayscale-0 transition duration-200 ease-linear"/>
                    <img src="/logos/tja_logo.webp" width="200" height="200" className="grayscale hover:grayscale-0 transition duration-200 ease-linear"/>
                </div>
            </div>

        </main>
    );
}
