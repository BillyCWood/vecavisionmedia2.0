export default function LogoCarousel() {
    return(
        <div className='bg-custom-gray py-10 relative border-y-2 border-white/50 h-[461px]'>
            <h2 className='font-bold text-2xl mb-5'>Trusted by the Gallatin Valley</h2>
            <div className="slide-container w-full inline-flex flex-nowrap">
                <ul id="top-slide-1" className="image-container flex items-center justify-center">
                    <li><img src="/logos/Daves_Sushi.svg" width="1" height="1" alt="Daves Sushi" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/jam.svg" width="1" height="1" alt="Jam!" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/revelry.webp" width="128" height="1" alt="Revelry" className="carousel-logo" /></li>
                    <li><img src="/logos/WilliesDistillery.svg" width="1" height="1" alt="Willie's Distillery" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/MontanaFlavor.webp" width="128" height="1" alt="Montana Flavor" className="carousel-logo bg-white rounded-3xl" /></li>
                    <li><img src="/logos/mountain_italian_ice_color.webp" width="128" height="1" alt="Mountain Italian Ice" className="carousel-logo" /></li>

                </ul>
                <ul id="top-slide-2" className="image-container flex items-center justify-center">
                    <li><img src="/logos/Daves_Sushi.svg" width="1" height="1" alt="Daves Sushi" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/jam.svg" width="1" height="1" alt="Jam!" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/revelry.webp" width={100} height="1" alt="Revelry" className="carousel-logo" /></li>
                    <li><img src="/logos/WilliesDistillery.svg" width="1" height="1" alt="Willie's Distillery" className="carousel-logo-svg" /></li>
                    <li><img src="/logos/MontanaFlavor.webp" width="128" height="1" alt="Montana Flavor" className="carousel-logo bg-white rounded-3xl" /></li>
                    <li><img src="/logos/mountain_italian_ice_color.webp" width="128" height="1" alt="Mountain Italian Ice" className="carousel-logo" /></li>
                </ul>
            </div>
            <div className="slide-container w-full inline-flex flex-nowrap mt-20">
                <ul id="bottom-slide-1" className="image-container flex items-center justify-center">
                    <li><img src="/logos/Tarantinos-logo-small.webp" width="192" height="1" alt="Tarantinos Pizza" className="carousel-logo2" /></li>
                    <li><img src="/logos/savage_logo.webp" width="192" height="1" alt="Savage Real Estate" className="carousel-logo2 bg-white rounded-sm" /></li>
                    <li><img src="/logos/casagrande.webp" width="192" height="1" alt="Casa Grande Real Estate" className="carousel-logo2" /></li>
                    <li><img src="/logos/montana_fence_green.webp" width="192" height="1" alt="Montana Fence" className="carousel-logo2 bg-white p-2 rounded-xl" /></li>
                    <li><img src="/logos/EvolveLogo.png" width="192" height="1" alt="Evolve Hair Design" className="carousel-logo2" /></li>
                    <li><img src="/logos/tja_logo.webp" width="192" height="1" alt="TJA Consulting" className="carousel-logo2 bg-white rounded-lg" /></li>
                    <li><img src="/logos/CraftedAesthetics.png" width="192" height="1" alt="Crafted Aesthetics and Wellness" className="object-contain min-w-[192px] bg-white p-2 rounded-xl" /></li>
                </ul>
                <ul id="bottom-slide-2" className="image-container flex items-center justify-center">
                    <li><img src="/logos/Tarantinos-logo-small.webp" width="192" height="1" alt="Tarantinos Pizza" className="carousel-logo2" /></li>
                    <li><img src="/logos/savage_logo.webp" width="192" height="1" alt="Savage Real Estate" className="carousel-logo2 bg-white rounded-sm" /></li>
                    <li><img src="/logos/casagrande.webp" width="192" height="1" alt="Casa Grande Real Estate" className="carousel-logo2" /></li>
                    <li><img src="/logos/montana_fence_green.webp" width="192" height="1" alt="Montana Fence" className="carousel-logo2 bg-white p-2 rounded-xl" /></li>
                    <li><img src="/logos/EvolveLogo.png" width="192" height="1" alt="Evolve Hair Design" className="carousel-logo2" /></li>
                    <li><img src="/logos/tja_logo.webp" width="192" height="1" alt="TJA Consulting" className="carousel-logo2 bg-white rounded-lg" /></li>
                    <li><img src="/logos/CraftedAesthetics.png" width="192" height="1" alt="Crafted Aesthetics and Wellness" className="carousel-logo2 bg-white p-2 rounded-xl" /></li>
                </ul>
            </div>
        </div>
    );
}
