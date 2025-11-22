"use client";
import CountUp from "react-countup";
import { useState, useEffect } from "react";


export default function About() {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Intersection Observer    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) { entry.target.classList.add('show'); }
                else { entry.target.classList.remove('show'); }
            });
        });
    
        const hiddenElements = document.querySelectorAll('.service-item');
        hiddenElements.forEach((el) => observer.observe(el));
    
    });

    return(
        <>
            {/* Mobile */}
            <div className='lg:hidden max-w-[1440px] mx-auto'>
                <h1 className='mx-auto text-vvm-lightblue'>Your Vision, Our Expertise</h1>
                <div className='w-fit mx-auto my-5 border border-white/50 service-item'>
                    <img src="/images/VVM-Jaiden_head.jpg" alt="Jaiden Veca" width="300" height="300" />
                </div>
                <p className='w-[90%] mx-auto text-center service-item'>Established in 2024, Jaiden Veca uses his passion for filmmaking to empower businesses and brands to connect with their audiences by delivering high-quality video production, marketing, and advertising services.</p>
                <div className='flex w-fit mx-auto mt-5 gap-x-5 service-item'>
                    <div>
                        <p>Projects Completed</p>
                        <p className='w-fit font-bold text-vvm-blue'>
                            { isClient && <CountUp start={0} end={60} enableScrollSpy scrollSpyOnce duration={3} useEasing={false}  /> }+
                        </p>
                    </div>
                    <div>
                        <p>Businesses Helped</p>
                        <p className='w-fit font-bold text-vvm-blue'>
                            { isClient && <CountUp start={0} end={20} enableScrollSpy scrollSpyOnce duration={3} useEasing={false}  /> }+
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop */} 
            <div className='max-lg:hidden flex mx-auto gap-x-10'>
                <div className='w-[300px] h-[300px] border border-white/50 z-2 service-item'>
                    <img src="/images/VVM-Jaiden_head.jpg" alt="Jaiden Veca" width="400" height="400" />
                </div>

                <div className='flex flex-col pt-5 service-item'>
                    <h1 className='w-fit mb-2 text-left text-vvm-lightblue'>Your Vision, Our Expertise</h1>
                    <p className='w-[650px] mb-20 text-left'>Established in 2024, Jaiden Veca uses his passion for filmmaking to empower businesses and brands to connect with their audiences by delivering high-quality video production, marketing, and advertising services.</p>
                    <div className='flex w-fit gap-x-5'>
                        <div>
                            <p>Projects Completed</p>
                            <p className='w-fit font-bold text-vvm-blue'>
                                { isClient && <CountUp start={0} end={60} enableScrollSpy scrollSpyOnce duration={3} useEasing={false}  /> }+
                            </p>
                        </div>
                        <div>
                            <p>Businesses Helped</p>
                            <p className='w-fit font-bold text-vvm-blue'>
                                { isClient && <CountUp start={0} end={20} enableScrollSpy scrollSpyOnce duration={3} useEasing={false}  /> }+
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
