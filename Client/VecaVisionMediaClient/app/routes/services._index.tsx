import Button from "~/ui/Button";
import { services } from "~/../utils/constants";

import { Link } from "react-router";

import { 
    SquareArrowOutUpRight,
    CloudSunRain,
    Clapperboard,
    Video,
} from "lucide-react";


export default function Home() {
    return(
        <main className='pb-10 relative'>
            <div className='services-hero w-screen overflow-hidden relative max-lg:pl-10 py-32'>
                <div className='w-3/4 lg:mx-auto lg:text-center'>
                    <h1 className='text-vvm-lightblue'>Inspire, Engage, and Impress</h1>
                    <p className=''>Hook your audience, engage their senses, and leave an unforgettable impression with captivating video productions that elevate your brand.</p>
                </div>
            </div>

            <div className='max-md:max-w-96 md:w-10/12 xl:w-3/4 2xl:w-1/2 mx-auto md:max-lg:ml-10 mt-14 max-md:px-6'>
                <h1 className='text-vvm-lightblue mb-4'>Our Services</h1>
                <div className='lg:grid lg:grid-cols-2 lg:gap-10'>

                    {
                        services.map((service: any, index: any) => (
                            <div className={`${index==4 ? 'col-span-2 text-center' : ''}`} key={index}>
                                <Link  
                                    to={ `/services/${service.slug}` }  
                                    >
                                    <div className={`lg:border-[1px] border-custom-gray hover:border-vvm-pink transition-colors duration-300 rounded-[12px] lg:px-5 ${index==4 ? '' : 'lg:min-h-52 2xl:min-h-56'}`}>

                                        <h2 className={`flex items-center gap-x-2 mt-5 mb-3 ${index==4 ? 'w-fit lg:mx-auto' : ''}`}>{service.name} <SquareArrowOutUpRight size={20} color='#ac00e6' /></h2>
                                        <p className='pb-6'>{service.summary}</p>
                                        <div className='h-0 w-full max-lg:border-b-2 border-white' />
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <div className="w-full mt-20">
                    <h2 className="flex items-center gap-x-2 w-fit mx-auto"><Clapperboard size={24} color='#38BDF8' />Full Set Production</h2>
                    <p className="mb-10 text-center">End-to-end video creation, from pre-production planning to on-set shooting and detailed post-production editing.</p>

                    <h2 className="flex items-center gap-x-2 w-fit mx-auto"><CloudSunRain size={24} color='#38BDF8' />Film in All Environments</h2>
                    <p className="mb-10 text-center">Sunshine, wind, rain, or snow, we'll brave the elements to get the shot of your dreams.</p>

                    <h2 className="flex items-center gap-x-2 w-fit mx-auto"><Video size={24} color='#38BDF8' />Versatile Creativity</h2>
                    <p className="text-center">We will bring your unique ideas to life by providing versatile video solutions for any need that doesn't fit into one of our categories.</p>
                </div>

                
            </div>
            <div className='mt-20 mb-20 flex flex-col items-center text-center'>
                <h2 className='text-vvm-lightblue font-bold'>Let's Bring Your Vision to Life</h2>
                <p className='mb-8 text-lg md:text-xl lg:text-2xl mx-8'>Pricing is based on the project. Want to know how much your project will cost?</p>
                <Link to={ "/contact" }><Button text="Request an Estimate" /></Link>
            </div>
            
        </main>
    );
}
