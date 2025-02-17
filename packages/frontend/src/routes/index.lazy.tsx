import { createLazyFileRoute } from '@tanstack/react-router'

import Navbar from '../components/Navbar'
import Search from "../components/Search.tsx";
import Map from "../components/Map.tsx";
import Featured from "../components/Featured.tsx";
import StayUpdated from "../components/StayUpdated.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row m-5 gap-6">
                <div className="lg:w-2/3 flex flex-col gap-6">
                    <Search />
                    <Featured />
                </div>
                <div className="lg:w-1/3 flex flex-col gap-6">
                    <Map />
                    <StayUpdated />
                </div>
            </div>
        </>
    )
}
