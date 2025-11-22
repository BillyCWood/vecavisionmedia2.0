'use client';
import { useState } from "react";

import { MoveRight } from "lucide-react";

export default function Banner() {
    const [isBannerOpen, setBannerOpen] = useState(true);

    return(
        isBannerOpen && (
            <div className="flex max-lg:justify-between w-full bg-white text-black">
                <div className="w-fit lg:mx-auto ml-6">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3haDOG2nIlVaUzkIGkc33Ye_XKwd_w87UhNJxA8w8X-RayA/viewform?usp=send_form" target="_blank" className="flex gap-x-2 py-2 px-4 w-fit group">
                        <div className="group-hover:underline">
                            Join our referral program to get $100 off your next project! 
                        </div>
                        <MoveRight />
                    </a>
                </div>
                <button className="mr-6" onClick={() => setBannerOpen(false)}>
                    <span className="block w-6 border-b border-black rotate-45"></span>
                    <span className="block w-6 border-b border-black -rotate-45 -translate-y-[1px]"></span>
                </button>
            </div>
        )
    );
}
