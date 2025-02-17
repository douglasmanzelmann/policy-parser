import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import Box from "./Box.tsx";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

export default function Map() {
    return (
        <Box bottomMargin="mb-5" className="flex flex-col w-full h-full">
            <h2>Legislative Activity by State</h2>
            <div className="flex-grow relative">
            <ComposableMap style={{
                maxWidth: "800px", // Adjust maximum width
                maxHeight: "450px", // Adjust maximum height
                margin: "0 auto", // Center map horizontally
            }}
                           projection="geoAlbersUsa">
                <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "#666" },
                                    pressed: { fill: "#444" },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
            </div>
        </Box>
    )
}