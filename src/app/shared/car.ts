/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Icars{
    "brand": string,
    "model":string,
    "url": string,
    "engines": engine[],
    "description": string,
    "images_links": any[],
    "brochures": any[]
}

export interface engine {
    [key:string]:engineSpec
}


export interface engineSpec{
    "Cylinders": string,
    "Displacement": string,
    "Power": string,
    "Torque": string,
    "Fuel System": string,
    "Fuel": string,
    "Fuel capacity": string,
    "Top Speed": string,
    "Acceleration 0-62 Mph (0-100 kph)": string,
    "Drive Type": string,
    "Gearbox": string,
    "Front": string,
    "Rear": string,
    "Tire Size": string,
    "Length": string,
    "Width": string,
    "Height": string,
    "Front/rear Track": string,
    "Wheelbase": string,
    "Ground Clearance": string,
    "Cargo Volume": string,
    "Turning circle (curb to curb)": string,
    "Aerodynamics (Cd)": string,
    "Unladen Weight": string,
    "Gross Weight Limit": string,
    "City": string,
    "Highway": string,
    "Combined": string,
    "CO2 Emissions": string
}
