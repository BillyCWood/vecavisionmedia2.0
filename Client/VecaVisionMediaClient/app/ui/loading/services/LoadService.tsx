import { Outlet } from "react-router";
import LoadServiceHeader from "./LoadServiceHeader";
import LoadServiceNav from "./LoadServiceNav";

export default function LoadService() {
    return(
        <main className="max-lg:mx-10 lg:w-3/5 mx-auto">
            <LoadServiceHeader />
            <div className="lg:grid lg:grid-cols-[75%_25%] mt-20">
                <Outlet />
                <div className="border border-white rounded-xl mt-14 w-80 h-fit mx-auto bg-black">
                    <h2 className="text-vvm-lightblue font-bold ml-12">Services</h2>
                    <LoadServiceNav />
                </div>
            </div>
        </main>
    )
}
