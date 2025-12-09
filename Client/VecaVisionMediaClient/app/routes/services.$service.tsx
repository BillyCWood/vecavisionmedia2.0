import LoadServiceBody from "~/ui/loading/services/LoadServiceBody";
import axiosClient from "../api/axiosConfig";

import { useState, useEffect } from "react";


export default function Service({ params }: any){


    const [pageInfo, setPageInfo] = useState(
        {
            name:           '',
            description:    '',
            features:       [
                {
                    title:          '',
                    description:    '',
                }

            ],
        }
    );
    const [isPageLoading, setIsPageLoading] = useState(false);
    useEffect(() => {
        const fetchService = async () => {
            setIsPageLoading(true);
            try {
                const res = await axiosClient.get('/services/' + params.service)
                setPageInfo(res.data);
                setIsPageLoading(false);
            } catch(error) {
                console.error("Error fetching services: ", error);
            }
        }


        fetchService();
    }, [params.service])

    console.log(pageInfo)
    return (
        <>
            { isPageLoading ? <LoadServiceBody /> :
                <>
                    <div className="lg:max-w-[33vw]">
                        <h1 className='text-vvm-lightblue mt-14 mb-3'>Features</h1>
                        {
                            pageInfo.features.map((feature: any, index: any) => (
                                <>
                                    <h2 key={index}>{feature.title}</h2>
                                    <p className="mb-5" key={index}>{feature.description}</p>
                                </>
                            ))
                        }
                    </div>
                </>
            } 
        </>

    )
}
