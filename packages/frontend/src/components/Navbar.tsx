import Box from "./Box.tsx";

export default function Navbar() {
    return (
        <Box className="mx-1 mt-1 mb-5 px-0 py-2">
            <div className="flex justify-between items-center mx-auto px-4 py-3">
                <a className="text-xl text-primary pl-0">PolicyParser</a>
                <div className="flex gap-8 pr-0">
                    <a className="text-primary">Federal</a>
                    <a className="text-primary">State</a>
                    <a className="text-primary">Login</a>
                </div>
            </div>
        </Box>
    )
}