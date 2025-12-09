import Button from "~/ui/Button";
import { Suspense } from "react";
import { NavLink, Link, Outlet, Await, useParams } from "react-router";
import type { Route } from "./+types/services";
import axiosClient from "../api/axiosConfig"
import LoadService from "~/ui/loading/services/LoadService";


export async function clientLoader({ }: Route.ClientLoaderArgs) {
    const res = await axiosClient.get("/services");
    const services = await res.data;
    return services;
}

export default function ServiceLayout({ loaderData, }: Route.ComponentProps) {
    const serviceNames = loaderData;
    return (
        <Suspense fallback={<LoadService />}>
            <Await resolve={ serviceNames }>
                {(value) => 
                <main className="max-lg:mx-10 lg:w-3/5 mx-auto">
                    <h1 className='mt-10 text-vvm-lightblue'>{value.find((el: any) => el.slug === useParams().service)?.name}</h1>
                    <p>{value.find((el: any) => el.slug === useParams().service)?.description}</p>
                    <div className="lg:grid lg:grid-cols-[75%_25%] mt-20">
                        <Outlet />
                        <div className="border border-white rounded-xl py-5 mt-14 w-80 h-fit mx-auto bg-black">
                            <h2 className="text-vvm-lightblue font-bold ml-12">Services</h2>
                            {
                                value.map((service: any) => (
                                    <NavLink to={'/services/' + service.slug} key={service._id} className={({ isActive }) => isActive ? 'services-nav bg-vvm-pink' : 'services-nav bg-custom-gray'}>
                                        {service.name}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className='mt-20 mb-6 flex flex-col items-center text-center'>
                        <h2 className='text-vvm-lightblue font-bold'>Let's Bring Your Vision to Life</h2>
                        <p className='mb-8 text-lg md:text-xl lg:text-2xl'>Pricing is based on the project. Want to know how much your project will cost?</p>
                        <Link to={"/contact"}><Button text="Request an Estimate" /></Link>
                    </div>
                </main>
                }
            </Await>
       </Suspense>
    );
}
