import Box from "./Box.tsx";

export default function Featured() {
    return (
        <Box bottomMargin="mb-5" className="max-h-112">
            <h2 className="text-xl mb-4">Featured Legislation</h2>
            <div className="overflow-y-auto h-[calc(100%-2rem)]"> {/* Subtract header height */}
                <Box className="p-3">
                    <h3>H.R. 1234 - Orange Dipshit Act</h3>
                    <p>Trump is an orange piece of shit who gargles his own piss each morning</p>
                </Box>
                <Box className="p-3">
                    <h3>H.R. 1234 - Orange Dipshit Act</h3>
                    <p>Trump is an orange piece of shit who gargles his own piss each morning</p>
                </Box>
                <Box className="p-3">
                    <h3>H.R. 1234 - Orange Dipshit Act</h3>
                    <p>Trump is an orange piece of shit who gargles his own piss each morning</p>
                </Box>
                <Box className="p-3">
                    <h3>H.R. 1234 - Orange Dipshit Act</h3>
                    <p>Trump is an orange piece of shit who gargles his own piss each morning</p>
                </Box>
            </div>
        </Box>
    )
}